import {IconX} from "@tabler/icons-react";

const ModalPokemon = ({showModal, onCloseModal}) => {
return (
    <section className={`fixed top-0 left-0 right-0 bg-blue-300 h-screen duration-500
    ${showModal ? "visible opacity-100" : "invisible opacity-0"}`}>

        <button onClick={onCloseModal} className="bg-white absolute top-4 right-4 rounded-lg p-1 hover:opacity-80 transition-opacity shadow-lg">
            <IconX size={35} stroke={3}/>
        </button>

    <article className={`bg-white h-[85%] absolute w-full rounded-tl-3xl rounded-tr-3xl text-center transition-all duration-500
    ${showModal ? "bottom-0" : "-bottom-full"}`}>

    Pokemon

    </article>
    </section>
)
}

export default ModalPokemon