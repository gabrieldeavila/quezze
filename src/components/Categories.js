import React from "react";
import { connect } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import Game from "./Game";
import { fetchCategoriesAndGames } from "../actions";
import "../css/main.min.css";

class Categories extends React.Component {
  componentDidMount() {
    this.props.fetchCategoriesAndGames();
  }
  games() {
    return this.props.listGames.map((game) => game.map(gm=>{
      console.log(gm)
      return <SwiperSlide tag="li" key={gm.id} ><Game gameProps={gm}  /></SwiperSlide>
    }));
  }
  render() {
    const name = this.props.category.name;
    
    return this.props.listGames.length === 0 ? null : (
      <div className="category">
        <h2 className="category-name">{name}</h2>
        <React.Fragment>
          <Swiper
            tag="section"
            wrapperTag="ul"
            id="main"
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              // when window width is >= 768px
              768: {
                spaceBetween: 10,
                slidesPerView: 2,
              },
              300: {
                spaceBetween: 20,
                slidesPerView: 1.3,
              },
            }}
          >
            {this.games()}
          </Swiper>
        </React.Fragment>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProperty) => {
  var listGames = state.games.filter((game) => {
    var resp = game[0].catId !== ownProperty.category.id;
    return resp;
  });
  return { listGames };
};

export default connect(mapStateToProps, { fetchCategoriesAndGames })(
  Categories
);
