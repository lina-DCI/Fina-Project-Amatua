
import ProductsMainSection from "../components/Products.MainSection"
import ProductsCottonBagsSection from "../components/Products.CottonBagsSection"
import ProductsHomeAndLivingSection from "../components/Products.HomeAndLivingSection"
import ProductsPaperArtSection from "../components/Products.PaperArtSection"
import InstagramSection from "../components/InstagramSection"

const Products = () => {
    return (
        <div>
            <ProductsMainSection />
            <ProductsCottonBagsSection />
            <ProductsHomeAndLivingSection />
            <ProductsPaperArtSection />
            <InstagramSection />
        </div>
    );
}

export default Products;
