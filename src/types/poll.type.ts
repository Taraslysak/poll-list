export type Poll = {
  id: string;
  title: string;
  options: PollOption[];
};

export type PollOption = {
  id: string;
  title: string;
  votes: number;
};
