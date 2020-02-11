import React, { useEffect, initialValue, useState } from "react";
import { getItem } from "../../service/baseApi";
import Breadcrumb from "../../components/Breadcrumb";
import { Grid, Paper, Typography } from "@material-ui/core";
import styles from "./style.module.css";
import Button from "../../components/Button";
import Loader from "../../components/Loader";
import SEO from "../../utils/seo";

const ProductDetail = ({ match }) => {
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    async function list() {
      const response = await getItem(match.params.id);

      if (response.error) {
        return;
      }

      setItem(response.item);
    }

    list();
  }, [match.params.id]);

  const quantity = () => {
    if (item.sold_quantity < 1) {
      return `Nenhum vendido`;
    }
    return `${item.sold_quantity} vendidos`;
  };

  const condition = () => {
    if (item.condition === "new") {
      return `Novo`;
    }
    return `Usado`;
  };

  if (item) {
    return (
      <SEO title={`ML | ${item.title}`} description={`${item.title}`}>
        <Breadcrumb></Breadcrumb>

        <Grid container>
          <Grid item xs={12}>
            <Paper>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
                className={styles.root}
              >
                <Grid xs={8} item className={styles.productImageContainer}>
                  <img src={item.picture} alt="" />
                </Grid>

                <Grid xs={4} item className={styles.productBuyContainer}>
                  <Grid item className={styles.detailText1}>
                    <Typography variant={"h5"}>
                      {condition()} - {quantity()}
                    </Typography>
                  </Grid>
                  <Grid item xs={10} className={styles.detailText2}>
                    <Typography
                      gutterBottom
                      variant="h2"
                      className={styles.productName}
                    >
                      {item.title}
                    </Typography>
                  </Grid>
                  <Grid item className={styles.detailText3}>
                    <Typography
                      gutterBottom
                      variant="body1"
                      className={styles.productPrice}
                    >
                      $ {item.price.amount}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button variant="secondary" label="Comprar" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                container
                direction="row"
                justify="left"
                alignItems="flex-start"
                className={styles.descriptionContainer}
              >
                <Grid xs={12} item className={styles.descriptionTitleContainer}>
                  <Typography
                    gutterBottom
                    variant="h1"
                    className={styles.descriptionTitle}
                  >
                    Descricao do produto
                  </Typography>
                </Grid>
                <Grid
                  xs={8}
                  item
                  className={styles.descriptionContentContainer}
                >
                  <Typography
                    gutterBottom
                    variant="h4"
                    className={styles.description}
                  >
                    {item.description}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </SEO>
    );
  }
  return (
    <SEO title={`ML | Carregando`} description={`Carregando`}>
      <Loader />
    </SEO>
  );
};

export default ProductDetail;
