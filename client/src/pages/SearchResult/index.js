import React, { useEffect, useState, initialValue } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import ResultItem from "../../components/ResultItem";
import { searchItem } from "../../service/baseApi";
import queryString from "query-string";

import styles from "./style.module.css";
import { Grid } from "@material-ui/core";
import Loader from "../../components/Loader";
import SEO from "../../utils/seo";

export default function SearchResult({ location }) {
  const [items, setItems] = useState(initialValue);
  const params = queryString.parse(location.search);

  useEffect(() => {
    async function list() {
      const response = await searchItem(params.q);

      if (response.error) {
        return;
      }

      setItems(response.items);
    }

    list();
  }, [location, params.q]);

  const searchItems = [];
  if (items) {
    searchItems.push(
      items.map(item => {
        return <ResultItem item={item} key={item.id} />;
      })
    );
  }

  if (searchItems && searchItems.length > 0) {
    return (
      <SEO
        title={`ML | Resultados para ${params.q}`}
        description={`Resultados para ${params.q}`}
      >
        <Breadcrumb></Breadcrumb>
        <div className={styles.root}>
          <Grid container>{searchItems}</Grid>
        </div>
      </SEO>
    );
  }
  return (
    <SEO>
      <Loader />
    </SEO>
  );
}
