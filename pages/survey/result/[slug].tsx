import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import AxiosAPI from "../../../client/lib/axiosAPI";

// import styles from "./survey.module.scss";

const SurveyResult = ({response}:any) => {

  return (
    <div className=''>
      <div>wakwkw</div>
      <div>wkkkkkkkkk</div>
    </div>
  );
};

export default SurveyResult;

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { params } = context;
  const response = await AxiosAPI({
    method: "GET",
    path: `/api/result`,
  });

  return {
    props: { response }, // will be passed to the page component as props
    revalidate: 2 * 60, //cache in 2 minutes
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};
