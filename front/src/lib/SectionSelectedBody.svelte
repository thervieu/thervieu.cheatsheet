<script>
    import { cardsStore, tagsStore, copyCardsStore } from '../logic';
    import Tag from './Tag.svelte'
  
  const filterCardsByTags = () => {
    const selectedTags = $tagsStore
      .filter((tag) => tag.selected)
      .map((tag) => tag.name);
    $cardsStore = JSON.parse(JSON.stringify($copyCardsStore));
    console.log("selectedTags", selectedTags);
    console.log("cardsStore", $cardsStore);
    console.log("copyCardsStore", $copyCardsStore);
    $cardsStore = $cardsStore.filter((card) => 
      selectedTags.every((tag) => card.tags.includes(tag))
    );
    console.log("selectedTags", selectedTags);
    console.log("cardsStore", $cardsStore);
    console.log("copyCardsStore", $copyCardsStore);

  }

  tagsStore.subscribe((value) => {
    filterCardsByTags();
  })
</script>

<div>
  <div class="grid grid-cols-4">
    {#each $tagsStore as tag}
      <Tag tag={tag}/>
    {/each}
  </div>
  {#each $cardsStore as section}
    <div>
      <p>{section.title}</p>
    </div>
  {/each}
</div>
