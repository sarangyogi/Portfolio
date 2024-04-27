import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
export const client= sanityClient({
    projectId:process.env.SANITY_PROJECTID,
    dataset:"production",
    useCdn:"true",
    apiVersion:"2022-06-12",
    token:process.env.SANITY_TOKEN
})
const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
    return builder.image(source)
}
export const getProjects=async ()=>{
    const projects=await client.fetch(`*[_type=="project"]`);
    return projects
}
export const getResume=async ()=>{
    const resume=await client.fetch(`*[_type=="Resume"]`)
    return resume[0]
}