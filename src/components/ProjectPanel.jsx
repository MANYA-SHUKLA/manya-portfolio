import React from "react";
import { motion } from "framer-motion";
import WebsiteIcom from "../assets/website.svg";

function ProjectPanel() {
  const Projects = [
  {
  title: "Quick Management System",
  description: "A full-stack Queue Management System with secure JWT authentication, real-time token handling, and performance analytics using Recharts.",
  live: "https://queue-management-system-five.vercel.app/login",
  image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExIWFRUXFRUVFRgYFxcYFhUXFRUXFxUXGBUYHSggGBolHRcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICYtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKMBNgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAMEBgcCAQj/xABKEAABAwIDAwgGBggEBQUBAAABAAIDBBEFEiEGMUEHEyJRYXGBkTJyobHB0SMkQlKSshQzQ2KCosLhNGNz8BZEU6PSVIOTs/EV/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAKREAAgICAgICAQIHAAAAAAAAAAECESExAxIEQRNRImHwIzJxkaGxwf/aAAwDAQACEQMRAD8A1n/iKNv62OaH14yR+JlxZd1WMU7oZC2aMgMdezhfceF73RRCcbwaCWKTNE3NlcQ4ABwIFwbjVPBOSvcmev6Set7P6z8Vd1itJiE9K93MyFmtjuINjpdpBB4+aP0fKDUN/WRxyDsux3mLj2K5xbdkQkkqNLSVQo+UGnd+sZJGeuwc3zGvsRyj2hpZfQnZc7gTlP4XWKzcWi00xjbF1qSX+H8wUagH1Eep8E5txKBRvuRqWgdvSG5N0R+oj1PgmkKWyqOCaeFKe1MvCBkVwTRCkvCYeECOQtdZuHcsiWtU8mZrXdbQfMIYIqe3MQdNSgji/wB7E9LSNG4Dco23MtqimHrHzLfkpsQLiOqyuOiJPJkW0NCGzuACAzwb1dNrI/rL9OpVuoj3qiQBJEmDGir4kw6JA7B/NrnIpxiXJiSCyHza8LFM5peGJFBZDLFyWKYY1GqJmN9Jw7uPkiho4yLktUabEvut8T8goUsznbzf3eSkqidLUMHG/d81Fkqyd2nvTuHYVPObQxPf2gdEd7z0R4lWrDOTmV1jPK2P91nTf3X0aD3XRVhhFIcSd+qdoGZpY29cjB5uAWj7U7IU1JQSvZETJ9GA+R13jNI0EhugGlxcBUTZ2AuqoB/msPk6/wAENUNOyViOs0p65JD/ADlRrJ1xuSesk+a8sgQ2QvLJwtUnDaLnX5b20J8km6VsLpWTsNpXGB4vYO1HggharNRyhseXqBCBU9KZCcvC5WPHNZbIhLLPKCEOcb9XxSSpXZXHuSRO7wEtn2Em6odB3qu9ycTdR6Du4+5aG5j9bB03d5960fZ/C4XUkIdEx12Am7QSSdSb9ap9XT6nvKv+BNtTxD/Lb7lcpWjOMcgyr2Lo3/syw9bHEew3CD1XJ239nOR2Pbf2j5K9JKezK6oxLaPBpqV7Y5CCD0m5SS0gm247jotConfUx6qD8p7PpIfV/qKOUzPqg9VNEtACQJhylSBRnqShh4TDwpDkw9MBorWadmVjR1NA8gsnWlwYi/KDJTyM0F7Brx5MJd/KhiRVtvzappj2O/MEbiqAANNbKu7TVrKquggiJzRtL35mubYEtsLOAN9ParjDRtaNdTZG8C+2jJ9pXF1Q8lAJo96teMwh9U9v7x9gVRxCsayV7DwNlblGOCFGUskN8ajuYpfOtKacqTT0JprZGMa5LE1V4pEz7WY9TdfbuHmhFTjUjtGAMHXvd8gi0NJsMSWaLuIA6zoh1RirB6ILj5D5+xDqekmndZjHyv7AXEX9w9itOF8m1S+xneyAHgem/wDC02/mU2V1KlUYhI/jYdTdPbvXNDhk0xtFG5545RcA9rtzfErYsI2AoYrF0bpndcps3/4xp5gqxfoMQyggADRrRZjewBoRsd1oyLDeT6Z9udkbH+60c4/u06I8yrrg/J/BHY8zmP3pjm/kAy+xXRjco6DBvtwHiSnYmuvqR3AH3nf5BVSJbZCgwlgAzEm24DotHgPmp8MTW+i0N7hr5p9kJPBOtpusp2SZ9yxzZaADi+eNvkHu/pWT7LH61GfuiR34Ynlajy5kCmp2DjOT+GM/+SzHZlv0kh+7TznzZl/qUS2aR0eAJWXdl22FxuQDpvUgMkIns4fph2ghMOw+X7h8AusPje12do9Ai6UlaoiVOLSHpnZWvHaR7Uzgw6TvVU1jGOldnOhFx3p2mELLtBGY3F1h0/hMy7UqBeI0QY1rgdXb16pdZCZQ0DTKvEuPkXX8nk1UkfVibqfRd3FOJqp9F3ct3o3RRqhiumED6CL1G+4KozBXDDf1UfqN/KEkNqiSkkkmIoHKYOnF3fEo5APqY9X4IHylnpxer8Uei/wY9X4JrRDK9Ior0/M5Q5JAkM8cmXoBV42TKGDrsir6oAgEhJSsRIjHSHePetaWS07gXC3WPetaTKRWsbgBr6V1teblF+Nrs096MPpOkXXO61uCH4mPrtN6kvvYi1RNlF02rolSqzL8QpS2rcT95x9iz/GYHPqH5QScy0/GDmnLuu/uVfj5PpZHmWCYxucSSXkuB8N6nkipPLK4pdY2UfHKd9PAJTa7jYN18yo8kb5KazWF738Ggk27hwWjY1swwCOKoBkc03+6wnrsNfMojDE1jGsY1rW9TQAPYtIxjHREpylsyjC9hKmTWQtiHb03/gb8SFb8M2Fo47FzXTu/fNmfgbp4OurQ2Px/31KTHA48EDGKWFrGhrGhjRuawBoHkpDGqRHR9ZUuKnaOCAIPMlwsPeR7Rqu2UoZq5zWDts2/Xv1Pmps8V9NbaXs4s695Gtu5O01IGkuDWC/UOke9yESMQZSRlDnA/atZo7butcd10QZEBwTVpM51YGW00JcTpv3AcetPti6yT429gtfxTbYj3KlZDtocT5iPo2zu0aD2b3EdQ95CD4Vj8s0rInhtibktzA9AF3X1gLSMG1ZjLmjGXX2Ufl8nOakb/rOP/bA+KoeyrS79It/0LfiljHzVt5dp71cDPuwF34pHD+lVbZVreaqS4kC0LbjteXW/lWb2dC/lJ9NBzUozEWy3RGPGomegzMSdRZeYhThxY5sZcMoF+C7jjnaOjExvf/ZNGM1FvLE/GalwIZFlB6x80xh1A/m5i4gXsd6gVOITEkF1uFhYKVg0h5uXMSb9amUqVj6qCtESojbnOZ1hpqE1C6EPaGgnUaqVb9zNcaBQ3Uzg8OsGgEHesuPMAg7QZljs9w7kk1VVQvm6wkuVxMz6hTVUeg7uTqYrz9G7u+K63o7Vsp0pVpopH81HZn2G3uRwGllUJZFd8P8A1UfqM/KEkXIdjJtqLFdpLxUQZ7ymO+li9X+oqwMP1Ier8FWeVF1pofU/qKsYP1L+FOOjN7KpiM1mkqn1+LuDTZWut1BCz7F4XBzupY8tobBP6e7nM3FeyYhI546R37lDqNBu1RDZ6g5yQZrjcQpWhI0PAYyGszbyW+9bKsUxGJ/NARnpC1vBas7aKmDQ4yt1ANhqfEDce9XGSWGa0RsUH12n9SX3sU/E5A1tyqli+1MLpWPYdWAgX3nMRfQdwQnFNpJJBpc+5X8q9EPjbZPLS+RzyLNaCe/Uf3RfDqvM0OZu3KhUGOzF725DIHNsQ3XKAerx9isWz0zwAxo093fdFdvyZLqK6o9xiUyS68NF7zI08FEmw2R8rnOksCTYD5IgxlrDq08gtPRK2MwxuP2req238zr38lLhpwDfUnrJJ8r7vBet7j/vtQjHMTc3MyM2IBueN7aAfNZcnIoJN/0Nowcrr1kPtTzAq5shib5c7JDmLbEHiQbgg9dtPNWdg7Fq1ToyhNTjaOHcd28bxfhwHWpICa89/C3tuu5ZWtBc4hoG8k2A8ShCscAQSTauBri3K9wBtmaGkHtFyNEOx/aEPaY4SbHRz91x1N468Sq9EbX3Lohxe5HHzeTTqBLxavM8hedBuaDwaNw7+PipWybL1IPU1x9lvihBR7Y5v0zj1Rn2ub8ltJVBnJxty5U39mZctEmbESPuwRDzL3f1IRs5Tl1LNawvNEPBrHn4hSeVKbNidR+6Y2+UTPiSuMDpnOpOiN9Q4n+GNo+K4msnsLQbmqnR2bzgAsOCbdUZtDnd3XCkzEgBpazQDU71xM48XgdVgqMKzoF1cuQX5jL2ld0EpkjeDYdyfqMr9HOc63Zoo1O5pjcI28UmsFN3Eac0FrbvLd+oQ9zTZ4FyOF1Ka95vlAOXfdNyTyBrr2uLbllxL8RwJU0QLGaWt8klApKp533I7kllJZIcZJn1wouKOtE89nxClIfj7rU8h7B+YLR6OxFClqFouGG8MZ/y2flCyKWpWtYP+oh/0o/yBFUDdkxeJWSTAzHlVv8ApEI/cH5yrQ1v1IeqFW+VN308Pqf1lWdn+DHqhEWQ9lWmhCA4phIeDbQqyyMKhyhRIukZnWYLIx9nC4vojeE0PNHNbWyPVNMXyMA4lGP+EKl25oHeVCjY8RKtVVUpa7ILWBKC4XHUzR5iXHU34DRaRDsRU2d0mC4txKcw/k/mY3J+kADsb/dXHhjWRS5JekVrYvBnyTM5xoyF2t95WrTYZCyN4axoGU8B1LLqCOSnxeOmMpdG3U9pIK1TEJLRP9U+5aqCWjLu3sqmweCsEZqNxc5w/habe+6sEzGXuAPBD9noy2kiF/sl343F3xU+Swae5QrKaAdtTw17E0zenRu6t/AD2JuIaqyUPNVRrgedkB++7f2m49it/gVxJQRvIc5gJ7fj1rk8rgfNFJOqOrx+ZcbdrZB2ZgLWueRbNYN7hvPdf3I+xyajjTostuHjXHBRRly8neTkcSPs0uDXOtmNhvPZbjdVWtpK2pOZzA1o9Ftxlb4XuT22VvjIsFJpy3iuiMuuaOWfGp4bKVDshMT0nsHdmPwA9qK0myDQ0h0h8GgfEqxl4voF0X6KvlmyF4/GvQAZsrTjeHOPa42/ly3RTC8IiYTkYG6WNr3PiSnXOKl4cNCe1Jyk9stccE8I+X+Uh98SqyN3POA/hAb8E/hucUkAbfpSTONvWa0e5CtrZs9ZUu66ic/91yMsndHS0oabXY53m8pPZotHdfRSufu4DeURcx1gOgLbiUGxCokL9C7cNyfpLZCHxucb6b0yJrBJqCT6UrR3BFaHZxgiDw8m+qr0kRAIbFa/E2Vzwd/1RgO8Cy5fLnKMU4nT4sIybTQJhwSK53670CxWSOJ5YI9D7VbM9lT9oYJHSCwLu5pNvJYeJOUpO2dHkwhGKpF0weKMxtsxu7qSXGCxvawDK46fdPySXJNSUmdUHFxTN6Qral9qWQ9jfzBFGkEXGoO49aqHKLUSNYxrXgNdmLm/aJbaxv1a+xets8xujNJam3Bbfgv+Hh/0o/yBYM9xJKv2G8p9PHDGx8MmZrGtOXIW9EAXF3A8FTRKkaQg+0W0UVG1pla85yQ3I0HUcLkgKtx8qtEd8c4/hYf617Pyg4bOObe17r7mujG/hrfQ9qmmVZRttdqxVTB4jLAxoaAT0jre5tu3rQMDxZlRQBzDuFiOII0IWT7QuBmcQLaotsNXmOR8N+i8B1u3cfglH2Q/RdjLpYqBNqVJlKhyOUs1SOKNt6mIdo961MLLcDaXVcZ4XWpohoJbEuV1ZKysRidZVk7R5R1e4LUsVceaf6p9yyqLDpTjj6oj6Jr3Nv7Fo9fjEZaWA6us0eJsqUl9mTi7JFA0tjYxw9FjW6dgA+CbxOazCOJ8U7RMuLk31QnaE2cAEDbG9cq8ivwTY3BVvafH3QSBjYmvtGH3dn0zOcLWaRwZfVVVistov128kmyAm2cX6s2vkszO1VSTpTQD/wBlxPmXJS7V1obe7Yze2kUYtv8AvAm+9NQYrNUZF2p4RaLHP+LK8/8AMu8Gxj3NRnZzEKmSrga+okc0ufmaZbggRPOrQBpcDen0aFZo7ZDe3NvNuPRDfMu3KTG91v1RHe5vwJXAi13GxuT03b+wdW9dT1jYzGwg3ecrbbtLb9e1SJ0sscGf7jR3uP8A4qdPo1otrbVMNTtS+58EikiO5Tqfox37CUJqKxjXBhdZztQNdQO3cNymY1PzdHK/7sMh8mEpiTTs+R6ybO97/vOc7zcT8VsGzeyLZ6Sme55Fomi2nyWMbm+HwWsM5QmUbGU3MucYmMaSLWJLA7r7UN5KrBambDwXuXuPj8lLj2OpRvBPifmqK/laPCA+Y+aYfysTcIR5/wBkWKjSWbK0Y/ZA96mxYRTtFmxtA6rBZA/lUquETR/Efko7+U2tP2WjzSdPZStaNqFFENzG+SX6PH9xvksNk5Q68/aaPA/NRn7c15/aD8P90sIbtm/ANHAeQSXz07a+uP7Y+QXiYjcW4RGN1x3KDjtAxkTni5Nt5R26F7StzU7wOopAZw6YAq502zFO8MJaCC3VZzNLcFaPsdiPO07etosfDRNsSQ6/Y6l+6EzJsdTtBcBYgXCNB5LrBSn0r7HUbilZRj9bJdx7CR5J/AJyKyK3FpHuQ3GbxzyN6nH26p7AKoCqgcOJLfMH+yKJNQmv1FMRwvebNbcqw/oJIBzAHuT2H0RY4uLgdOpT0sruU3AJ5Ia28oIjBOvatCdtVTjiT4FUvFg7M6zXHU6gIdRMLibusO0pxjWBuXsv52xgsSGvIG+zULfyl0tjljkPghFHE2JrxcOzX4pjZbBoiZDLl3kjuRJP0JS+yvQ4jUSSSOjabOe51uq5upuF1khqomSdEXJN/wB1pPvARl8rInODC0C6fwnDI6yQtfYgMLtCQb3AGo1G9JRj72Ntlzw2MZGnfvPtVe2g/X27EWjwTmI/o5XANbYBxzDTv1VXbMXvzONyVaRDZLes721lcaiQAusAxmhdY3Y13cfTK0O+qzLaSQOqpNP2ltw1yAN+6Tw7R2K47EB526kC+rrD0uwcXdh3+aUOXO4EcSALG2/teLbuJK90Lx63YL6335fge7guYLXJ7D1D3tI9y0EdU1td2/S4Z/U4W3q0cnMYNY2wHRild9i+rmAXyknc/cfBVekeAN9rG/pNF91rXaTwPs8btyYMBne698sDW7wbZnA20Asfo92veiWmI0uPed3++tDMRkBqqffYc47c47h1W19FT532Y89TSfwglA8He500Jc4uIgc4km56T3ce4hZxT2ZcsliP6r/aLHNVBjXOOuUXtuv5r1lQHAOtbMAbb7XF9SomOS5ad59UebgvH1LYIGuI0a1gsLX1ACmsFudSd6ogT/SV8LbdHISeF/T4dSI8pEuTDKsjhBIB4sI+KiYSecxDNbRsId3Xa235k1yxT5cKn/eDW/ikYPiqltIXDqT/AFPmdkdyB1kDzNkc2jaDVTeuR+EBvwQ3DI808LeuWMfzhE65vOVEm7pTPsTu1ebKTYHCJe80r3ByePIBMw16mn5qUzk7bxmd4NHxT6hZnfNpc2tPh5OoeLpD5D4L2o2Mo49HCQm1xqfglQGX5F5kXtUXGd8UTSbOIaDvsOtcPbK304y3W2o4qeyuhnWVeL3pZcxBte1+3qSTEfRRKHY1VsZE4vNhYqa4rM+UDGDJIIG7r9L5ICyr1MrrktGhJt3Insji88bzHGN+p7F62mAb3C5Vg2Cw4WfO4DpHo93BU0CZxWbQysdrIB4WRXDdpGZfpJtUA5Qooy6KNrQC5wv3byudpqCFtI0BozaWtvU0OwNj8jXTvcx2YE70Je8tAcDYtcHA9Vij+z8DGzRgsDhbcRpfuKsfKTs0IKWKcMaznHBmUAA3c1zhcAdirrgjvmh6kxkTRt+m4C69hxh0J0lHioOD4LG6nZGei6wuRoVTtr8LdTy5Q64O5RbLpGs4VtTJK7m8zNQVBqMPg6V6hwlzG7Q4316gFRdm6XmZoZC83zC44WdorLtmzmqpswG8DxtwJ8iD1gfdKy5Z1C6spXF4OhFCXFomebAH0na3t8wvZaOFpP0j9Br0j2fNU+rxvpmRuh09m/3BTG7QAgOd9p13duUZtP4iPILj+Se+pp3f2WH9EpeMju3UrkY9+gPa+ldmLw5sma5GUWt3G59iCOnLje1uoDhbTx6r/NX3Y7ZVlXQvzuyl0xscodYNa3tHHMu7jSeaM5ydUFqnbqAwG8oBItezgNe9qCQ7Q0n/AKmId7wPencV5LZXsyx1bOzNE4e55VSreR3Efsy0z/45Gk+Bjt7Vs69GMU/ZdIcap3bqiE90jD8Vm9fIXSud0SC+Rw6Q1zOJ1s7Tf2Jmq5KcVb/y7X+pLEfY5zT7FDdsTiMQ6VFP/Cwv/wDrzITKaHebcD3A7jfh2Hf/ALsvYWGzjc7gDv3HTWx990LqMOnj9OGZnrRvZ7wFCFSfvn8X91fYVFphDwywzWyk/tRvz/d6PwN+9aByZtN6hxv+yYLl5sGh5t9ILj0wsZbVycHu8yiOH7T1sIIiqHsubnRhubAXOZp4AJSlaCj6DrhK7MxuXKY3A3PSzEEDssolJSyxOzhrXEQxxgZgNejm14cVjlByiYkHdKpzDtih+DFIbypYlf0oSL8Yvk4JJtIzlxpu7NlxZk0kUjBGB0m5Tmb0hrfu1t5pjGudkjfG2I6PaGnMDmaL624bhp2qoYryg1kFDTzFkDnSkXGV4GrS7g/RV9nLHPexpIT3PePeCi2ifj73lmxbNUjhUTyEWGVjWnrAAB/KFXOXeW2HFv3pIh5PDv6Ub5MtoHV1K6d0TYzzjm2Ds1w0DUkgcbrP+XraFrntoQ03Zzcrn3FtRIMtuvcVLbcjaEVGFL7/AOmYbNMvVwD/ADAfK5+CLy7P1BJOTeSd/WUzslhkwqoZDG4M1cHcD0DZaBSVr3C+TS9lzc3M4P8AE6eLjjJZCWzOOvZA1ksHSaLX0sfMqTV7Safq9N3AWVfrazgQew8EJrMSG4O779a45+RyyCXHGLLfHtK4dE2A333/AP4oMmMtcSd++1z81TH15J0BtuJ4KdRzMjF32cOrqWUpcktsnCPJ6ZnPia3S1Pbr3KTO4PIvly3udNSeHcoX/wDSYHOcPRO7sQIYgQ4lu6/FWoSnkRb6tlOW2Lb9K9sul7b0kLhr3Wv1pKEmvbC0aiXKibWYWznc4FjbfZXQvUWphzcAe9e4jFmXVnOCNwDXHrNkNp9oJ2NDGusAtVqICWlgY0AjqCrbNjoRcu36lUyUUOqxKSRwc5xJG49SNUDnytGYkga6pzEsAZY82bkcBqrJR4LIymYI4ZHkjpWY4n3JJBJj/JxhfP1rSRdrNT4Ixy44kDLTU99GNdO4drjkZ7GyeamcnuajD3yUs93aaRPuBwtp3qk7b0GI1lbNUNpJAxxDY82VpDGANbcF2l9XW/eSllhHCIFBtMGOu4G3YhW1uKtnka8DQWTx2RxA74mjve34LuXYqrcBcxj+In4KepopDLcSYQLGxFreC2zDqOnrKWMyxMk04jXrGu/isiw/k/kc9olqGsYT0i1hcQOy62LZrD2UkIhEhewAZXO9Ii3GwA6tylRrY5S7ASs2Jw+5+qt/E7/yUMbKUQtamZpuuSbeZVqrZ4/vt80MbWRWBzjUX4g+IIuENIcbKNtHCxk2VjWtAY3RosOK1Lk9jtQRdvOOPjI4fAKnV9LSzFxLZDKbBhGjBbe5xdwA4DeniaiCEtpZSwjUC/Rvx6LgRr3Koq1gicqeTTkllB23xOGMF8cczh6Qy7+4sI9ycpeV+3+Ions7WPv/ACva33p0FmpWXhCpFHyqYa+2aSSIn78bjbxjzBHqLaqimNo6uFx6ucaHfhJB9iBBclMT0kb/AE42O9ZoPvCcDr6pXQMDVGyeHv1fRUxPXzMYPmAh9TydYW/fRtHqPkZ+RwVpSTFZRpeSbDD6LJWerM4/nuh0vIxR72VNQ3vMTh+QLSl6gLMqreSCRzGsbiDi1noNfDcN/C8IJLyKVQN21ULu9r2/NbhdK6LBYAHJ7s/+g0rY3uHO9IvLSSwkkkWuAsu272MxOprppxT52vcA1zXs9EAAHKXXHctwXiQIxXDMDqqVjGzB9ml2XMLNF2mzb+akMdI1pa1l+OnarjykRvMMYD7DPutxDSb3VGgrnNFze1rHqPaCvN549Z0dPFKo5B80j7kOAF72zdaCV2ZrrO33RPFJzcuLrgHdpcdXv3ofV1LHN6YJsNOsH/YRCKSyjOUsjlPUtbG/PoN/eolFVEg5hcHd1hD5JCRltpwTtNE+1237Vp8aogdxGrY0hjAQeN1NwqJrg4EdqB1Lm5ukbnrT0NeNwvc6JuGKQwsIrH3L1eULdNTwSWDdDtH0e3ZunHBx73H4J1uA0w/Z+bnH4okkvQtlUgecGp/+izxF/eu48NhG6KMfwN+SmlcotkuKEyMDcAO4WXrkknJFEWcIFiMKPyoTXt0KuJlNFTq47cUPe5Fa2FxNmgu7AL+xQjgFS46Rlva4ho8zuWpjkYjIK4rMcqYbBjQWjg74FGaLZSe93vY38Tj7AETOy8Ztne93dYA+VyFLaLimUCp2wqOMDfxf2Qiq2rqz6MTB3kla5T7N0jd0DHeuDJ77geSh12xdHLqI3RHrjdp+E3A8goas1UjPtnMRqZDeSNp63bhbqCsdQ/oovHsjzTbRvDgOvQ/EKHiGHljekLdvDzW0KSownbdlXrXi29BJ3lEsVjPA39qrzopXEhjHu9VrnewApSKijiojYd7GnwCgS0sXUR3E/FFWYLWu3U7/AOIBn5iFIj2Sq3b2sZ6zx/SCoyXaANO58X6meSL1HOZ+QhGKXbTFIvRqy8dTw19+8ubf2qazYmT7UzB3NLveQpVPshC0gyPfIOLRZgPYbXPkQimJyiX3ZrHK2WnilkiY7O0G4BF9SLjU6G1/FG48Y+/E4d2vvsgMeMujY0RjK1oDQ0WytAFgAOAAXrNrnfbjB8FVGdlkZisR+0R3gp+Orjdue0+I9yrTNo6d3pxW7kL2tlpJqWQNuHWPhobm/YLoaGpGgLxfNlJiNVF+qq52dgkdb8N7exGaXlAxSP8Abtl/1GNPtaAfaps0pm9JLHqTldqW/raSN/WWOc32HMjlByt07yGuppmuPawjzuD7EWgpj/KLUPaW6XabkeG828QqM55mbpmaAN9uj58EU2u2jdO8PLbN9BovfKDvJPWVO2DqLyPicBo0EdRC42lOeDocOsMmf1VKb6uuNfFRnEPaQDe2/sC2HHcCid0hAHXuHZeieFt3iq0dnGRNfe0RfoGjpSOvoF2cHhSlltV/n+37RyT5UjMaaN7SHAaX0vvRKtrssRHok+a0Wk5Ps1O9hkOYyNe0gDNdsM1mbtWlxFwN+VN4lyaRlga4yF+Rzrh7GAFkDJC2xjcek4vbf7IsbOsQedwd5NErMdbc9qn0lP5labW8msYldkjlbzk8rY2CVgYyNoYWuBMJJBzOAGtgB6R0LT+TQh7tZQG5HMF23mDoQ8xMc5jSHtfcZi03b9kOsHNoopMTy0WKSuFDsRK4XkeB3JLLqHVn0EkkktyxLxJJMBJFJJAiPMhNfxSSVRM5FXxWrfEWujdlJeGncbjNusdFb8Pmcd5voD5pJK2REem03LqySSkoTG3APGwXkOu//fikkkB5I3f2blAfvt2pJKgBOJ4NTyBxdE29t46J/E2xVPwKukbK6Brvom3yt0Nru11OvE8UklSJei0EXUSZqSSZmQ5FGevUkxD8G5NytCSSAIlc4tbcaHuCrmO1D+a9I6uDT3G9x7EkllLZrDRW1wUklJojwpyI6pJIKCTTmFjqO1WTYU/Wh6jvgkkppWhtumaJKwEWKgRYdEwlzWDN1kknzJ0SSXQpyUWk8GFKyQ55tl4Xv49/FMuCSSzZaOSEmhJJZyNUdpJJKCj/2Q==",
  tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"]
},
  {
  title: "Task Manager App",
  description: "A full-stack Task Manager app with secure user authentication, database-backed task CRUD operations, and status management for pending and completed tasks.",
  live: "https://task-manager-app-gray-nine.vercel.app/login",
  image: "https://snacknation.com/wp-content/uploads/2020/12/Best-Task-Management-Software-Platforms.png"
  tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"]
},
 {
  title: "Manya Closet",
  description: "A pixel-perfect e-commerce frontend built with React.js, featuring modern UI, dynamic product listings, and responsive design.",
  live: "https://manya-closet.vercel.app/",
  image: "/site.png",
  tags: ["React.js", "Javascript", "CSS", "Responsive Design"]
},

  {
    title: "World Atlas",
    description: "A responsive web app that displays country-specific data like population, region, and capital using a public REST API and modern UI.",
    live: "https://world-atlas-xi.vercel.app/",
    image: "/atlas.png",
    tags: ["React.js", "REST API", "CSS", "Responsive Design", "JavaScript"]
  },
  {
    title: "Doctor-Patient Locator",
    description: "A location-based web application that connects patients with nearby doctors using Google Maps API and MongoDB geospatial queries.",
    live: "https://github.com/MANYA-SHUKLA/doctor-patient-locator", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8z4cnVeqvIgBEXK7dTNMDbhHZar09rc21yw&s", 
    tags: ["React.js", "Node.js", "MongoDB", "Google Maps API", "express.js"]
  },
  {
    title: "Artwork Table UI",
    description: "An interactive and responsive UI table for managing artwork data using PrimeReact components with filtering and pagination.",
    live: "https://artworks-data-table-k6x5.vercel.app/", 
    image: "/row.png", 
    tags: ["React.js", "PrimeReact", "CSS", "JavaScript"]
  },
];

  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing my skills through real-world applications and solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100"
    >
      {/* Image with gradient overlay */}
      <div className="relative aspect-video overflow-hidden">
        <img
          loading="lazy"
          src={project.image}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          alt={project.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span key={i} className="bg-blue-500/80 text-white text-xs px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
        
        {/* Action buttons */}
        <div className="flex justify-between items-center">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <img src={WebsiteIcom} alt="Live Demo" className="w-5 h-5" />
            <span>View Live</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectPanel;
