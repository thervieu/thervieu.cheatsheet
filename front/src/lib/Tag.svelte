<script>
    export let tag;
    import { tagsStore } from '../logic.js';

    const selectTag = (selectedTag) => {
        $tagsStore = $tagsStore.map(tag => tag.name === selectedTag ? Object.create({"name": tag.name, "selected": !tag.selected}) : tag);
    }
</script>

<button class="flex flex-col text-sm items-center rounded-full px-2 my-1 m-1 text-white {tag.selected ? "bg-green-500 hover:bg-green-600" : "bg-green-600 hover:bg-green-500"}" on:click|preventDefault={() => selectTag(tag.name)}>
    {tag.name}
</button>

