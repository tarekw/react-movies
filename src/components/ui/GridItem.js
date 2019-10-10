import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Rating from '@material-ui/lab/Rating';

const IMAGE_BASE = 'https://image.tmdb.org/t/p/w300/';

const GridItem = (props) => {
    return (
        <div>
            { props.movie ? (
                <div
                    style={
                        {
                            width: '300px',
                            padding: '10px'
                        }
                    }
                >
                    <Card >
                        <CardMedia
                            style={{height: 450, width: 300}}
                            image={IMAGE_BASE+props.movie.poster_path}
                        />
                        <CardContent>
                            <Rating name="half-rating" value={(props.movie.vote_average / 10) * 5} precision={0.5} />
                            <Typography gutterBottom variant="headline" component="h2">
                                {props.movie.title}
                            </Typography>
                        </CardContent>
                    </Card>
                </div> ) : null
            }
        </div>
    );
};

export default GridItem;
