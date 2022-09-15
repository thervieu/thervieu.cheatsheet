<script>
    import { writable } from 'svelte/store';
    
    import SectionSelectedBody from './SectionSelectedBody.svelte';
    import { fetchSelect } from '../logic';

    let selectedView = "";
    let subjectArray = writable(Array(["Python", "Test", "Test2"]));
  
    const getSelectedObjects = async () => {
      fetchSelect(selectedView.toLowerCase());
    }
</script>

<div class="flex flex-row m-4 bg-blue-600 text-white">
      {#each $subjectArray[0] as name}
        <div class="{selectedView === name ? "bg-blue-900" : "bg-blue-800"}  rounded px-3 mx-4 cursor-pointer">
          <div on:click={() => {
            selectedView = name;
            getSelectedObjects();
          }}>
            {name}
          </div>
          {#if selectedView === name}
            <SectionSelectedBody />
          {/if}
        </div>
      {/each}
    </div>