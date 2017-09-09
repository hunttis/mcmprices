# mcmprices
A lightweight node app that will search for mcm card prices.

### To start the service, you need to add four environmental variables from your MKM-profile.
The variable names should be descriptive enough for anyone who uses Magic Card Market.
- APP_TOKEN
- APP_SECRET
- ACCESS_TOKEN
- ACCESS_SECRET

### Finding information on a card
Call the service, for example
`http://localhost:3000/products/gaeas_cradle`
and you will receive a JSON-response containing basic information on the card.

The response will be in the following format:
```{
    "product": [
        {
            "idProduct": 10528,
            "idMetaproduct": 2257,
            "idGame": 1,
            "countReprints": "3",
            "name": {
                "1": {
                    "idLanguage": 1,
                    "languageName": "English",
                    "productName": "Gaea's Cradle"
                },
                "2": {
                    "idLanguage": 2,
                    "languageName": "French",
                    "productName": "Berceau de Gaia"
                },
                "3": {
                    "idLanguage": 3,
                    "languageName": "German",
                    "productName": "Gaeas Schoß"
                },
                "4": {
                    "idLanguage": 4,
                    "languageName": "Spanish",
                    "productName": "Cuna de Gaia"
                },
                "5": {
                    "idLanguage": 5,
                    "languageName": "Italian",
                    "productName": "Culla di Gea"
                }
            },
            "website": "/Products/Singles/Urza%27s+Saga/Gaea%27s+Cradle",
            "image": "./img/cards/Urzas_Saga/gaeas_cradle.jpg",
            "category": {
                "idCategory": 1,
                "categoryName": "Magic Single"
            },
            "priceGuide": {
                "SELL": 139.09,
                "LOW": 115,
                "LOWEX": 128.99,
                "LOWFOIL": 0,
                "AVG": 180.11,
                "TREND": 143.91
            },
            "expansion": "Urza's Saga",
            "expIcon": 24,
            "number": "321",
            "rarity": "Rare"
        },
        {
            "idProduct": 17593,
            "idMetaproduct": 2257,
            "idGame": 1,
            "countReprints": "3",
            "name": {
                "1": {
                    "idLanguage": 1,
                    "languageName": "English",
                    "productName": "Gaea's Cradle"
                },
                "2": {
                    "idLanguage": 2,
                    "languageName": "French",
                    "productName": "Berceau de Gaia"
                },
                "3": {
                    "idLanguage": 3,
                    "languageName": "German",
                    "productName": "Gaeas Schoß"
                },
                "4": {
                    "idLanguage": 4,
                    "languageName": "Spanish",
                    "productName": "Cuna de Gaia"
                },
                "5": {
                    "idLanguage": 5,
                    "languageName": "Italian",
                    "productName": "Culla di Gea"
                }
            },
            "website": "/Products/Singles/Judge+Rewards+Promos/Gaea%27s+Cradle",
            "image": "./img/cards/Judge_Rewards_Promos/gaeas_cradle.jpg",
            "category": {
                "idCategory": 1,
                "categoryName": "Magic Single"
            },
            "priceGuide": {
                "SELL": 526.86,
                "LOW": 550,
                "LOWEX": 640,
                "LOWFOIL": 0,
                "AVG": 702.24,
                "TREND": 513.02
            },
            "expansion": "Judge Rewards Promos",
            "expIcon": 77,
            "number": "1998-03",
            "rarity": "Rare"
        },
        {
            "idProduct": 249758,
            "idMetaproduct": 2257,
            "idGame": 1,
            "countReprints": "3",
            "name": {
                "1": {
                    "idLanguage": 1,
                    "languageName": "English",
                    "productName": "Gaea's Cradle"
                },
                "2": {
                    "idLanguage": 2,
                    "languageName": "French",
                    "productName": "Berceau de Gaia"
                },
                "3": {
                    "idLanguage": 3,
                    "languageName": "German",
                    "productName": "Gaeas Schoß"
                },
                "4": {
                    "idLanguage": 4,
                    "languageName": "Spanish",
                    "productName": "Cuna de Gaia"
                },
                "5": {
                    "idLanguage": 5,
                    "languageName": "Italian",
                    "productName": "Culla di Gea"
                }
            },
            "website": "/Products/Singles/WCD+1999%3A+Matt+Linde/Gaea%27s+Cradle",
            "image": "./img/cards/WCD_1999_Matt_Linde/gaeas_cradle.jpg",
            "category": {
                "idCategory": 1,
                "categoryName": "Magic Single"
            },
            "priceGuide": {
                "SELL": 26.36,
                "LOW": 12.5,
                "LOWEX": 24,
                "LOWFOIL": 0,
                "AVG": 26.14,
                "TREND": 27.35
            },
            "expansion": "WCD 1999: Matt Linde",
            "expIcon": 87,
            "number": null,
            "rarity": "Special"
        }
    ]
}`
