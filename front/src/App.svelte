<script>
  import './lib/Tailwind.css';
  import Description from './lib/Description.svelte';
  import Sections from './lib/Sections.svelte';
</script>

<section>
  <div class="min-h-screen flex flex-col bg-blue-500">
    <div class="flex flex-center rounded items-center bg-red-500 text-white">
      thervieu.cheatsheet
    </div>
    <Description />

    <Sections />
  </div>
</section>