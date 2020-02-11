import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Link } from "@material-ui/core";
import styles from "./style.module.css";
import Logo from "../Logo";

export default function ResultItem({ item }) {
  const detailLink = "/items/" + item.id;
  return (
    <Grid item xs={12} sm={12} key={item.id} className={styles.resultItemCard}>
      <Paper className={styles.paper} key={item.id} square component={"div"}>
        <Grid container>
          <Grid item sm={2}>
            <ButtonBase className={styles.image} href={detailLink}>
              <img
                className={styles.img}
                alt="product-img"
                src={item.picture}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm={8} container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item className={styles.pricingContainer}>
                <Typography variant={"h2"}>
                  $ {item.price.amount}{" "}
                  <Logo
                    src="/img/ic_shipping.png"
                    hasMargin={false}
                    href={detailLink}
                  />
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  gutterBottom
                  variant="h3"
                  className={styles.resultName}
                >
                  <Link
                    underline={"none"}
                    className={styles.link}
                    color={"inherit"}
                    href={detailLink}
                  >
                    {item.title}
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="row"
            sm={2}
            justify="center"
            alignItems="center"
          >
            <Typography variant="h6">{item.address}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
