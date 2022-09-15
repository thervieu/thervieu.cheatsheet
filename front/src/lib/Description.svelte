<script>
    import { slide } from "svelte/transition";
    let visible = true;
</script>

<div class="rounded text-white bg-blue-600">
    <div on:click={() => {visible = !visible;}} class="flex items-center m-6 cursor-pointer">
      <div class="mx-2 text-xl font-bold">
        About Me
      </div>
      {#if visible}
      <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
      </svg>
      {:else}
      <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
      {/if}
    </div>
    {#if visible}
      <div transition:slide>
        <div class="rounded flex flex-col p-5 mx-5">
          <div>
            Formation
            <p>42</p>
            <p>blabla</p>
          </div>
        </div>
      </div>
    {/if}
  </div>