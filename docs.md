## features

- list episodes in category sections
  - [e-sports, fitness, politics]
- filter episodes by podcast name

#### list episodes in category sections

return in a Rest API, the podcast name, videoId, episode name, cover image, link and categories.

```json
[
  {
    "podcastName": "ABC DO SOCIALISMO",
    "episode": "É possível imaginar o fim do capitalismo? - ABC DO SOCIALISMO #01",
    "videoId": "PIdUa54WVTY",
    "thumbnail": "https://i.ytimg.com/vi/PIdUa54WVTY/hqdefault.jpg",
    "link": "https://www.youtube.com/watch?v=PIdUa54WVTY",
    "categories": ["politics"]
  },
  {
    "podcastName": "ABC DO SOCIALISMO",
    "episode": "Produção de Consenso - ABC DO SOCIALISMO #02",
    "videoId": "z4d_GyRz7eA",
    "thumbnail": "https://i.ytimg.com/vi/z4d_GyRz7eA/hqdefault.jpg",
    "link": "https://www.youtube.com/watch?v=z4d_GyRz7eA",
    "categories": ["politics"]
  }
]
```
