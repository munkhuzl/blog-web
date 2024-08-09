// import Link from "next/link";
// import Image from "next/image";
// export function ArticleCard({ article }) {
//   const [article, setaArticles] = useState([]);

//   useEffect(() => {
//     fetch("https://dev.to/api/article?username=arindam_1729")
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         setArticles(data);
//       });
//   }, []);

//   return (
//     <div key={article.id} className="shadow-lg card bg-base-100">
//       <div className="card-body">s
//         <div className="flex gap-2">
//           {article.tag_list.map((tag) => (
//             <div className="badge badge-primary">{tag}</div>
//           ))}
//         </div>
//         <Image
//           src={article.social_image}
//           width={500}
//           height={500}
//           className="bg-slate-600 object-cover"
//         />
//         <Link href={article.url} target="_blank">
//           {article.title}
//         </Link>
//       </div>
//     </div>
//   );
// }
