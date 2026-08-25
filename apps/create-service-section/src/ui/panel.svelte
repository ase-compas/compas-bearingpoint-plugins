<script lang="ts">
  import {
    getIeds,
    getIedName,
    getExistingServices,
    buildServicesElement,
    newEditEventV2,
    SERVICES_SECTIONS,
  } from '../core/services';
  import type { FieldDef } from '../core/services';
  import {
    createServiceSectionState,
    selectIed,
    setNameLength,
    setSectionEnabled,
    setChildSectionEnabled,
    setFieldValue,
    setChildFieldValue,
    setError,
    setSuccess,
    resetForm,
  } from '../store/services-form.svelte';

  let panelEl: HTMLDivElement | undefined = $state();

  // Derived from the current document rather than cached, since the
  // `editor` plugin re-renders whenever `doc` changes.
  let ieds = $derived(getIeds(createServiceSectionState.doc));

  let selectedIed = $derived(
    ieds.find(ied => getIedName(ied) === createServiceSectionState.selectedIedName)
  );

  function handleCreate() {
    const { doc, nameLength, formState } = createServiceSectionState;
    const ied = selectedIed;
    if (!doc || !ied) return;

    const services = buildServicesElement(doc, nameLength, formState);
    const existingServices = getExistingServices(ied);

    // A `Services` element has a 0..1 cardinality under `IED`: the insert
    // and the removal of any previous one are combined into a single
    // complex edit so they land as one entry in the undo history.
    const insert = { parent: ied, node: services, reference: existingServices };
    const edit = existingServices ? [insert, { node: existingServices }] : insert;

    panelEl?.dispatchEvent(newEditEventV2(edit, { title: 'Create Service Section' }));

    setSuccess(`Services section created for "${getIedName(ied)}".`);
  }
</script>

<div class="panel" bind:this={panelEl}>
  <h2>Create Service Section</h2>

  {#if ieds.length === 0}
    <p class="hint">No IEDs found in the currently opened project.</p>
  {:else}
    <div class="field">
      <label for="ied-select">IED</label>
      <select
        id="ied-select"
        value={createServiceSectionState.selectedIedName ?? ''}
        onchange={(e) => selectIed((e.target as HTMLSelectElement).value)}
      >
        <option value="" disabled>Choose an IED…</option>
        {#each ieds as ied (getIedName(ied))}
          <option value={getIedName(ied)}>{getIedName(ied)}</option>
        {/each}
      </select>
      {#if selectedIed && getExistingServices(selectedIed)}
        <p class="hint">This IED already has a Services section — its current configuration was loaded below for editing.</p>
      {/if}
    </div>

    {#if selectedIed}
    <div class="field">
      <label for="name-length">Name Length</label>
      <input
        id="name-length"
        type="number"
        min="0"
        value={createServiceSectionState.nameLength}
        oninput={(e) => setNameLength((e.target as HTMLInputElement).value)}
      />
    </div>

    {#snippet fieldInput(fieldDef: FieldDef, fieldId: string, value: string, onChange: (value: string) => void)}
      <div class="field">
        <label for={fieldId}>{fieldDef.label}</label>
        {#if fieldDef.type === 'boolean'}
          <select id={fieldId} value={value} onchange={(e) => onChange((e.target as HTMLSelectElement).value)}>
            <option value="true">true</option>
            <option value="false">false</option>
          </select>
        {:else if fieldDef.type === 'select'}
          <select id={fieldId} value={value} onchange={(e) => onChange((e.target as HTMLSelectElement).value)}>
            {#each fieldDef.options ?? [] as option (option)}
              <option value={option}>{option}</option>
            {/each}
          </select>
        {:else}
          <input id={fieldId} type="number" {value} oninput={(e) => onChange((e.target as HTMLInputElement).value)} />
        {/if}
      </div>
    {/snippet}

    <div class="sections">
      {#each SERVICES_SECTIONS as section (section.tag)}
        {@const sectionState = createServiceSectionState.formState[section.tag]}
        <fieldset>
          <legend>
            <label>
              <input
                type="checkbox"
                checked={sectionState.enabled}
                onchange={(e) => setSectionEnabled(section.tag, (e.target as HTMLInputElement).checked)}
              />
              {section.label}
            </label>
          </legend>

          {#if sectionState.enabled}
            {#if section.fields.length > 0}
              <div class="fields">
                {#each section.fields as fieldDef (fieldDef.name)}
                  {@render fieldInput(
                    fieldDef,
                    `${section.tag}-${fieldDef.name}`,
                    sectionState.values[fieldDef.name],
                    (value) => setFieldValue(section.tag, fieldDef.name, value)
                  )}
                {/each}
              </div>
            {/if}

            {#each section.children ?? [] as child (child.tag)}
              {@const childState = sectionState.children[child.tag]}
              <fieldset class="nested">
                <legend>
                  <label>
                    <input
                      type="checkbox"
                      checked={childState.enabled}
                      onchange={(e) => setChildSectionEnabled(section.tag, child.tag, (e.target as HTMLInputElement).checked)}
                    />
                    {child.label}
                  </label>
                </legend>

                {#if childState.enabled}
                  <div class="fields">
                    {#each child.fields as fieldDef (fieldDef.name)}
                      {@render fieldInput(
                        fieldDef,
                        `${section.tag}-${child.tag}-${fieldDef.name}`,
                        childState.values[fieldDef.name],
                        (value) => setChildFieldValue(section.tag, child.tag, fieldDef.name, value)
                      )}
                    {/each}
                  </div>
                {/if}
              </fieldset>
            {/each}
          {/if}
        </fieldset>
      {/each}
    </div>
    {/if}
  {/if}

  {#if createServiceSectionState.error}
    <p class="error">{createServiceSectionState.error}</p>
  {/if}
  {#if createServiceSectionState.success}
    <p class="success">{createServiceSectionState.success}</p>
  {/if}

  <div class="actions">
    <button type="button" class="secondary" onclick={resetForm}>Reset</button>
    <button
      type="button"
      class="primary"
      disabled={!selectedIed}
      onclick={handleCreate}
    >
      Create
    </button>
  </div>
</div>

<style>
  .panel {
    padding: 1.5rem;
    max-width: 720px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h2 {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 500;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  label {
    font-weight: 500;
    font-size: 0.9rem;
  }

  select,
  input[type="number"] {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 0.9rem;
  }

  .sections {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  fieldset {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 0.75rem;
    margin: 0;
  }

  fieldset.nested {
    margin-left: 1rem;
    margin-top: 0.5rem;
  }

  legend {
    padding: 0 0.5rem;
    font-weight: 600;
    font-size: 0.9rem;
  }

  legend label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .fields {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 0.75rem;
    margin-top: 0.5rem;
  }

  .hint {
    margin: 0.5rem 0 0 0;
    font-size: 0.85rem;
    color: #666;
  }

  .error {
    margin: 0.5rem 0 0 0;
    padding: 0.75rem;
    background: #fee;
    color: #c00;
    border-radius: 4px;
    font-size: 0.9rem;
  }

  .success {
    margin: 0.5rem 0 0 0;
    padding: 0.75rem;
    background: #efe;
    color: #060;
    border-radius: 4px;
    font-size: 0.9rem;
  }

  .actions {
    display: flex;
    gap: 0.5rem;
    justify-content: flex-end;
    margin-top: 0.5rem;
  }

  button {
    padding: 0.6rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 500;
  }

  button.secondary {
    background: #f5f5f5;
    color: #333;
  }

  button.secondary:hover {
    background: #e8e8e8;
  }

  button.primary {
    background: #0066cc;
    color: white;
  }

  button.primary:hover:not(:disabled) {
    background: #0052a3;
  }

  button.primary:disabled {
    background: #ccc;
    color: #999;
    cursor: not-allowed;
  }
</style>
