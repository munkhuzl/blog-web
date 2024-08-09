import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import parse from "html-react-parser";

// async function generateMetadata({ params }) {
//   const response = await fetch(
//     `https://dev.to/api/articles/${params.author}/${params.slug}`
//   );
//   const article = await response.json();
//   return {
//     openGraph: {
//       title: article.title,
//       description: article.description,
//       images: [{ url: article.social_image }],
//     },
//   };
// }

export default async function Page({ params }) {
  const response = await fetch(
    `https://dev.to/api/articles/${params.author}/${params.slug}`
  );
  const article = await response.json();

  return (
    <main>
      <Navbar />
      <div className="container mx-auto">
        <div>{article.title}</div>
        <div className="prose">{parse(article.body_html)}</div>
      </div>
      <Footer />
    </main>
  );
}
