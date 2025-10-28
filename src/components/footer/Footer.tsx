import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

function Footer() {
  let data = new Date().getFullYear()

  return (
    <>
      <div className="flex justify-center bg-indigo-900 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">
            Blog de Pedro |  {data}
          </p>
          <p className="text-lg">Acesse minhas redes sociais</p>
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/pedroemanueln" target="_blank">
                <LinkedinLogoIcon size={48} weight="bold"/>
            </a>
            <a href="https://www.instagram.com/pre3du" target="_blank">
                <InstagramLogoIcon size={48} weight="bold"/>
            </a>
            <a href="https://www.facebook.com/pedro.emanuel.16503" target="_blank">
                <FacebookLogoIcon size={48} weight="bold"/>
            </a>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer