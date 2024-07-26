import { ProjectsCard } from "@/lib/interface";
import { client } from "@/lib/sanity"
import Image from "next/image";

async function getData() {
    const query = `*[_type == 'project'] {
      _id,
      title,
    'imageUrl': image.asset->url,
      description,
      tags,
      link,
      linkgithub,
}`

        const data = await client.fetch(query); 
        
        return data;
}

export default async function Projects () {
    const data: ProjectsCard[] = await getData()

    return (
        <section className="max-w-7xl px-4 w-full mx-auto md:px-8">
            <h1 className="text-3xl font-semibold lg:text-4xl pt-5">Projetos</h1>
                <p className="leading-7 text-muted-foreground mt-2">Meus projetos favoritos.</p>

                <div className="py-12 grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 grid-cols-1">
                    {data.map((item) => (
                        <a href={item.link} key={item._id} target="_blank" className="group block">
                            <div className="aspect-w-16 aspect-h-12 overflow-hidden rounded-2xl relative">
                                <Image src={item.imageUrl} alt='project image' fill/>

                            </div>
                        </a>
                    ))}
                </div>

        </section>
    )
}