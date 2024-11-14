export const getPollingVote = (arr: Array<any>, key: string) => {
    return (arr.filter((e) => e === key).length / 10000) * 100;
}