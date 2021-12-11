import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import AxiosAPI from "../../../client/lib/axiosAPI";

import styles from "./result.module.scss";

const SurveyResult = ({ data }: any) => {
  const result = data && data.data;
  console.log(result.allResult);

  return (
    <div className={styles.result}>
      <div className={styles.result}>
        <div>Answer per question</div>
        <table>
          <tr>
            <th>No</th>
            <th>A</th>
            <th>B</th>
            <th>C</th>
          </tr>
          <tr>
            <td>1</td>
            <td>{result && result.no1A}</td>
            <td>{result && result.no1B}</td>
            <td>{""}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{result && result.no2A}</td>
            <td>{result && result.no2B}</td>
            <td>{result && result.no2C}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>{result && result.no3A}</td>
            <td>{result && result.no3B}</td>
            <td>{""}</td>
          </tr>
        </table>
      </div>

      <div className={styles.result}>
        <div>Answer per individual</div>
        <table>
          <tr>
            <th>Name</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
          </tr>
          {result &&
            result.allResult.map((res: any) => (
              <tr>
                <th>{res.fullName}</th>
                <th>{res.answer_1}</th>
                <th>{res.answer_2}</th>
                <th>{res.answer_3}</th>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
};

export default SurveyResult;

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { params } = context;
  const response = await AxiosAPI({
    method: "GET",
    path: `http://localhost:3000/api/result`,
  });

  return {
    props: { data: response.data }, // will be passed to the page component as props
    revalidate: 2 * 60, //cache in 2 minutes
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};
