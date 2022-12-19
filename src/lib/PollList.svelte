<script lang="ts">
  import type { Poll } from "../types/poll.type";
  import PollCard from "./PollCard.svelte";
  const polls: Poll[] = [
    {
      id: "bubu",
      title: "Red or blue",
      options: [
        { id: "qwe", title: "RED", votes: 2 },
        { id: "asd", title: "BLUE", votes: 4 },
      ],
    },
  ];
</script>

<div class="container">
  {#each [...polls] as poll}
    <PollCard {poll} />
  {/each}
</div>

<style>
  .container {
    display: flex;
    align-self: stretch;
    flex-direction: column;
    flex-grow: 1;
    background-color: aquamarine;
  }
</style>
