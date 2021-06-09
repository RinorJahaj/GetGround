import React from "react";
import { Typography, Paper, Grid, Container } from "@material-ui/core";

class Book extends React.Component {
  render() {
    const { book } = this.props;

    return (
      <div className="book">
        <Container>
          <Paper>
            <Grid container spacing={2}>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography align="center" gutterBottom variant="subtitle1">
                      Title: {book.book_title}
                    </Typography>
                    <Typography gutterBottom variant="subtitle1">
                      Author: {book.book_author}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Published: {book.book_publication_year}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      ID: {book.id}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Pages: {book.book_pages}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </div>
    );
  }
}

export default Book;
