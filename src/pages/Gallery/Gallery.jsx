import { useState } from "react"
import GalleryItem from "./GalleryItem"
import { GalleryList } from "./GalleryList"
import Modal from "../../components/Modal/Modal"
import LoadMoreInfo from "../LoadMoreInfo/LoadMoreInfo"

const Gallery = () => {
const [isOpen, setIsOpen] = useState(false)
const [currentPet, setCurrentPet] = useState()
    const handleInfoPet = (data) => {
        setCurrentPet(data)
        setIsOpen(pS => !pS)
console.log(data, 'dataaaaaaaa')
    }
    return (
        <>
        <GalleryList>
            <GalleryItem  handleInfoPet={handleInfoPet}/>
        </GalleryList>
        {isOpen && 
        <Modal>
            <LoadMoreInfo currentPet={currentPet}/>
        </Modal>}
        </>
    )
}

export default Gallery