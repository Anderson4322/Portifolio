export default function Imagem({src, alt}){
    return <img
            src={src}
            className="rounded-lg w-40  mb-4"
            alt={alt}
          />
}