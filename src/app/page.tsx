import { db } from "~/server/db";

export const dynamic = "force-dynamic"; 

const mockUrls = [
  "https://utfs.io/f/e9486b54-9bfd-4513-b13b-ded3326c86a0-a5h5a.gif",
  "https://utfs.io/f/80f943be-dfd0-4426-a136-42fa639fa157-hufbc3.png",
  "https://utfs.io/f/5d065bdd-9b61-45ef-b533-002f012174d7-1qm8jb.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
