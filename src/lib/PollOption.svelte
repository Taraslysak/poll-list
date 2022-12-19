<script lang="ts">
  import type { PollOption } from "../types/poll.type";

  export let option: PollOption;

  const addVote = () => {
    option.votes = option.votes + 1;
  };
</script>

<li>
  {option.title}. Votes: {option.votes}
  <button on:click={addVote}>+</button>
</li>
