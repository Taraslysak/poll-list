<script lang="ts">
  import { each } from "svelte/internal";
  import type { Poll } from "../types/poll.type";
  import PollOption from "./PollOption.svelte";

  export let poll: Poll;
</script>

<div>
  {poll.title}
  <ul>
    {#each poll.options as option}
      <PollOption {option} />
    {/each}
  </ul>
</div>

<style>
</style>
