import React from 'react'
import Coaching from "../../components/Coaching";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Lifestyle from "../../components/Lifestyle";
import BodyeticWarriors from "../../components/BodyeticWarriors";
import GymStore from '../GymStore';
import { useContext } from 'react';
import { GeneralContext } from '../../contexts/GeneralContext';
const Home = () => {

    const { gainers, clothes } = useContext(GeneralContext)

    return (
        <>
            <Hero />
            <About />
            <Coaching />
            <Lifestyle />
            <GymStore link="/market/clothes" products={clothes} page_title="Gym Wear & Accessories" page_subtitle="Men & Women" />
            <GymStore link="/market/gainers" products={gainers} page_title="Supplements & Sports Nutrition" page_subtitle="Protein, Creatine, Vitamins, Fat Loss & more" />
            <BodyeticWarriors />
            <Footer />
        </>
    )
}

export default Home