import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CoinBox from '../components/CoinBox'
import {styles} from '../styles/CryptoSectionStyle'
import { Box } from '@material-ui/core'

export default function CryptoSection({search}) {
    const classes = styles()
    const [coin, setCoin] = useState([])
    const filteredCoins = coin.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()))
    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then((res)=> {
            setCoin(res.data)
        })
        .catch((error)=> console.error(error))
    }, [])
    return (
        <Box className={classes.coinsSection}>
            {filteredCoins.map(coin => {
                return(
                    <CoinBox 
                        key={coin.id}
                        name={coin.name}
                        price={coin.current_price}
                        symbol={coin.symbol}
                        marketcap={coin.market_cap}
                        volume={coin.total_volume}
                        image={coin.image}
                        priceChange={coin.price_change_percentage_24h}
                    />
                )
            })}
        </Box>
    )
}
