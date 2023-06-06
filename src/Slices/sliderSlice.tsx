import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Slide {
  imageSrc: string;
  // altText: string;
  // title: string;
  // description: string;
  // buttonText: string;
}

interface SliderState {
  slides: Slide[];
  activeIndex: number;
}

const initialState: SliderState = {
  slides: [
    {
      imageSrc: 'https://image2.jdomni.in/banner/08022022/7A/60/30/CF523C9AE14690092024C73657_1644314926439.png?output-format=webp',
      // altText: 'COSMOPOLIS',
      // title: 'COSMOPOLIS',
      // description: 'Quisquemos sodales suscipit tortor ditaemcos condimentum de cosmo lacus meleifend menean diverra loremous.',
      // buttonText: 'Shop Now'
    },
    {
      imageSrc: 'https://image3.jdomni.in/banner/08022022/69/2C/20/E8784272171ED541E62775A416_1644314716358.png?output-format=webp',
      // altText: 'Stylish Top Trending',
      // title: 'Stylish Top Trending',
      // description: 'So soft, you don\'t want to take it off.',
      // buttonText: 'Explore Now'
    }
    // {
    //   imageSrc: 'https://wallpaperaccess.com/full/986774.jpg',
    //   // altText: '',
    //   // title: 'Hulton Perfect Simple',
    //   // description: 'So soft, you don\'t want to take it off.',
    //   // buttonText: 'Shop Now'
    // }
  ],
  activeIndex: 0
};

const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    nextSlide: (state) => {
      state.activeIndex = (state.activeIndex + 1) % state.slides.length;
    },
    prevSlide: (state) => {
      state.activeIndex = (state.activeIndex - 1 + state.slides.length) % state.slides.length;
    }
  }
});

export const { nextSlide, prevSlide } = sliderSlice.actions;

export default sliderSlice.reducer;
