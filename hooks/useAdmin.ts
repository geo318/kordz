export const useAdmin = () => {
  const musicList = fetch(`${process.env.NEXT_PUBLIC_URL}/api/music`, {
    next: { tags: ['music-list'] },
  }).then((res) => res.json())

  return { musicList }
}
