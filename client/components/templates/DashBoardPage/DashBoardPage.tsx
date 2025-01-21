import BrandSlider from "@/components/modules/DashboardPage/BrandSlider";
import {useEffect, useState} from "react";
import {IBoilerParts} from "@/types/boilerparts";
import {getBestSellersNewPartsFx} from "@/app/apiSlice/boilerParts";
import toast from "react-hot-toast";
import DashboardSlider from "@/components/modules/DashboardPage/DashboardSlider";

const DashBoardPage = () => {

  const [newParts, setNewParts] = useState<IBoilerParts>({} as IBoilerParts);
  const [bestSellers, setBestSellers] = useState<IBoilerParts>({} as IBoilerParts);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    loadBoilerParts()
  }, []);

  const loadBoilerParts = async () => {
    try {
      setSpinner(true);
      const bestsellers = await getBestSellersNewPartsFx('/boiler-parts/bestsellers');
      const newParts = await getBestSellersNewPartsFx('/boiler-parts/new');

      setBestSellers(bestsellers)
      setNewParts(newParts)
    } catch (error) {
      toast.error((error as Error).message);
    } finally {
      setSpinner(false)
    }
  }
  return (
    <section className={'w-[1440px] mx-auto'}>
      <div>
        <div className="relative ">
          <BrandSlider/>
        </div>
        <h2 className={'text-2xl'}>Детали для котлов</h2>
        <div className={'pt-5'}>
          <h3 className={'text-lg pb-2'}>Хиты продаж</h3>
          <DashboardSlider items={bestSellers.rows || []} spinner={spinner}/>
        </div>
        <div className={'pt-5'}>
          <h3 className={'text-lg pb-2'}>Новинки</h3>
          <DashboardSlider items={newParts.rows || []} spinner={spinner}/>
        </div>
        <div className={'pt-10'}>
          <h3 className={'text-lg '}>
            О компании
          </h3>
          <p className={'py-5'}>
            Инструкции и схемы помогут разобраться в эксплуатации, определить неисправность и правильно выбрать запчасть
            для ремонта Вашего газового оборудования. Купить запчасть, деталь для ремонта газового котла возможно в
            любом населенном пункте Российской Федерации:
            Осуществляем доставку запчасти к газовым котлам в следующие города: Москва, Сан
          </p>
        </div>
      </div>
    </section>
  );
};

export default DashBoardPage;
