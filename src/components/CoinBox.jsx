import { Box, createStyles, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

export default function CoinBox({name, price, symbol, marketcap, volume, image, priceChange}) {
    const classes = makeStyles((theme) => createStyles({
        cryptoCoin: {
            width: theme.spacing(40),
            margin: theme.spacing(2),
            position: 'relative',
            textAlign: 'center',
            borderRadius: theme.spacing(2),
            overflow: 'hidden',
            boxShadow: priceChange < 0 ? `4px 8px 20px 0 rgb(240 6 7 / 20%), -11px -12px 18px 0 rgb(0 0 0 / 55%)`: `4px 8px 20px 0 rgb(17 216 17 / 20%), -11px -12px 18px 0 rgb(0 0 0 / 55%)`,
            '& .cryptoCoin__logo': {
                width: theme.spacing(5),
                height: theme.spacing(5),
                marginTop: theme.spacing(2.1),
                clipPath: `circle(${theme.spacing(7.5)}px at center)`
            },
            '& .priceContainer': {
                padding: theme.spacing(2),
                marginTop: theme.spacing(1),
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                border: 'none',
                color: 'white',
            },
            '& .cryptoCoin__price': {
                paddingBottom: theme.spacing(1)
            }
        },
        cryptoCoinNameWrap: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: theme.spacing(0.5),
            fontWeight: 700,
            '& .cryptoCoin__name': {
                fontWeight: 800,
            },
            '& .cryptoCoin__symbol': {
                textTransform: 'uppercase',
                fontSize: theme.spacing(1.5),
                fontWeight: 500,
                paddingLeft: theme.spacing(1)
            }
        }
    }))()
    return (
        <Box className={classes.cryptoCoin}>
            <img className="cryptoCoin__logo" src={image} alt={`${name}`}></img>
            <Box className={classes.cryptoCoinNameWrap} component="div">
                <Typography className="cryptoCoin__name" variant="h6">{name}</Typography>
                <Typography className="cryptoCoin__symbol" variant="h6">{symbol}</Typography>
            </Box>
            <Typography className="cryptoCoin__price" variant="body1">${price.toLocaleString()}</Typography>
            <Typography className="cryptoCoin__marketCap" variant="body2">Market Cap: ${marketcap.toLocaleString()}</Typography>
            <Typography className="cryptoCoin__volume" variant="body2">Volume(24H): ${volume.toLocaleString()}</Typography>
            {priceChange < 0 ?(
                <Box className="priceContainer">
                    <ArrowDropDownIcon/>
                    <Typography variant="body1">{parseFloat(priceChange).toFixed(2)}%</Typography>
                </Box>
            ): (
                <Box className="priceContainer">
                    <ArrowDropUpIcon/>
                    <Typography variant="body1">{parseFloat(priceChange).toFixed(2)}%</Typography>
                </Box>
            )}
        </Box>
    )
}
