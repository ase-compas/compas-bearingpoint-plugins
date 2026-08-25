<script lang="ts">
  import { isDialogOpen, closeDialog } from './validatorStore.svelte';

  let dialogEl: HTMLDialogElement;
  let step = $state(1);
  const totalSteps = 3;

  // Placeholder content only - no rule is actually created/persisted yet.
  const steps: Record<number, { title: string; text: string }> = {
    1: {
      title: 'Step 1 of 3 - Select Context',
      text: 'Choose the SCL element context this rule should apply to (e.g. Substation, IED, LN). Placeholder step - nothing is created yet.',
    },
    2: {
      title: 'Step 2 of 3 - Define Assertion',
      text: 'Write the XPath assertion the selected context must satisfy. Placeholder step - nothing is created yet.',
    },
    3: {
      title: 'Step 3 of 3 - Review & Save',
      text: 'Review the rule configured in the previous steps and save it. Placeholder step - nothing is created yet.',
    },
  };

  function next() {
    if (step < totalSteps) step++;
  }
  function back() {
    if (step > 1) step--;
  }
  function finish() {
    step = 1;
    closeDialog();
  }

  $effect(() => {
    if (isDialogOpen()) {
      step = 1;
      dialogEl?.showModal();
    } else {
      dialogEl?.close();
    }
  });
</script>

<dialog bind:this={dialogEl} onclose={closeDialog}>
  <h2>{steps[step].title}</h2>
  <p>{steps[step].text}</p>
  <div class="actions">
    <button onclick={closeDialog}>Cancel</button>
    <span class="nav">
      {#if step > 1}
        <button onclick={back}>Back</button>
      {/if}
      {#if step < totalSteps}
        <button onclick={next}>Next</button>
      {:else}
        <button onclick={finish}>Save</button>
      {/if}
    </span>
  </div>
</dialog>

<style>
  dialog {
    border: none;
    border-radius: 8px;
    padding: 1.5rem;
    max-width: 24rem;
    font-family: sans-serif;
  }

  dialog::backdrop {
    background: rgb(0 0 0 / 40%);
  }

  .actions {
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-between;
  }

  button {
    margin-left: 0.5rem;
  }

  .actions > button {
    margin-left: 0;
  }
</style>
