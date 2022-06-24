import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  background: #414148;
  color: white;
  height: 320px;
  position: relative;
`;

const FooterContent = styled.div`
  height: 300px;
`;

const FooterSection = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;
const FooterAbout = styled(FooterSection)`
  max-width: 300px;
  height: 300px;
  display: inline-block;
`;
const FooterAboutTitle = styled.h5`
  font-weight: bold;
`;

const FooterAboutParagraph = styled.p`
  font-size: 14px;
`;

const FooterCategories = styled(FooterSection)`
  max-width: 300px;
  display: inline-block;
  vertical-align: top;
`;

const FooterCategoriesTitle = styled.h5`
  font-weight: bold;
`;

const FooterTags = styled(FooterSection)`
  width: 300px;
  display: inline-block;
  vertical-align: top;
`;

const FooterTagsTitle = styled.h5`
  font-weight: bold;
`;

const FooterContactUs = styled(FooterSection)`
  width: 300px;
  display: inline-block;
  vertical-align: top;
`;

const FooterContactUsTitle = styled.h5`
  font-weight: bold;
`;

const FooterBottom = styled.div`
  background: #6a2baa;
  color: white;
  height: 20px;
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0px;
  left: 0px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const FooterCategoriesLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 14px;
`;

const FooterSlash = styled.div`
  display: inline-block;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterAbout>
          <FooterAboutTitle>About Mary Nghiem's Fave Eats</FooterAboutTitle>
          <FooterAboutParagraph>
            Mary Nghiem's Fave Eats is a website that is designed to help people who don't usually cook. This website
            helps users find easy recipes for Breakfast, Lunch and Dinner.
          </FooterAboutParagraph>

          <FooterAboutParagraph>
            Along with providing easy recipes to follow, Mary Nghiem's Fave Eats also provides the user with information
            regarding the ingredients and the cost of those ingredients.
          </FooterAboutParagraph>

          <i className="fa fa-facebook space"></i>
          <i className="fa fa-instagram space"></i>
          <i className="fa fa-twitter space"></i>
          <i className="fa fa-youtube-play space"></i>
          <i className="fa fa-envelope space"></i>
        </FooterAbout>
        <FooterCategories>
          <FooterCategoriesTitle>Categories</FooterCategoriesTitle>
          <FooterCategoriesLink href="/breakfast"> Breakfast </FooterCategoriesLink>
          <FooterSlash>/</FooterSlash>
          <FooterCategoriesLink href="/marysTopBreakfast"> Mary's Top Breakfast </FooterCategoriesLink>
          <FooterSlash>/</FooterSlash>
          <FooterCategoriesLink href="/mainCourse"> Main Course </FooterCategoriesLink>
          <FooterSlash>/</FooterSlash>
          <FooterCategoriesLink href="/desserts"> Desserts </FooterCategoriesLink>
          <FooterSlash>/</FooterSlash>
          <FooterCategoriesLink href="/marysTopDinner" className="footer-categories-link">
            {" "}
            Mary's Top Dinner{" "}
          </FooterCategoriesLink>
          <FooterSlash>/</FooterSlash>
          <FooterCategoriesLink href="/sideDish" className="footer-categories-link">
            {" "}
            Side Dish{" "}
          </FooterCategoriesLink>
          <FooterSlash>/</FooterSlash>
          <FooterCategoriesLink href="/mealPrepByIngredient" className="footer-categories-link">
            {" "}
            Meal Prep By Ingredients{" "}
          </FooterCategoriesLink>{" "}
          <FooterSlash>/</FooterSlash>
          <FooterCategoriesLink href="/calorieIntake" className="footer-categories-link">
            {" "}
            Meal Prep By Calories{" "}
          </FooterCategoriesLink>
        </FooterCategories>
        <FooterTags>
          <FooterTagsTitle>Tags</FooterTagsTitle>
        </FooterTags>
        <FooterContactUs>
          <FooterContactUsTitle>Contact Us</FooterContactUsTitle>
          <input placeholder="Your email address"></input>
          <input placeholder="Message..."></input>
        </FooterContactUs>
      </FooterContent>
      <FooterBottom>&copy; Mary Nghiem's Fave Eats | Designed by Mary Nghiem</FooterBottom>
    </FooterContainer>
  );
};
