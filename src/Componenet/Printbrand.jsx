import CatagoryOFBrand from "./Brand"
//import styles from "./brand.module.css";

const ListItem = () => {
    return (
        <>
        <CatagoryOFBrand catagory="Mobile Operating System"
            title1="Android" title2="BlackBerry" title3="iphone" title4="Windows Phone"
        />
        <CatagoryOFBrand catagory="Mobile Manufacturers"
            title1="Samsung" title2="HTC" title3="Micromax" title4="Apple"
        />
        </>
    )
}

export default ListItem
