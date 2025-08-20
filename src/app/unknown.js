export default function Home() {

  const name = "juan";
  var num = 1;

  function suma(a,b){

  }

  const resta = () => {}

  suma(1,2)



  const nums = [1,2,3,4]
  const nombres = ["juan", "pedro", "maria", "luis"];
  resta()


  return (
    <div>
      <p className=" text-blue-100" >hola</p>
      <h1>hello</h1>

      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAeFBMVEX33x4AAAD/6B/85B/CshiIfBH64R7/5h/n0RwtLAX/7CD/7iD/6h/Uwhr03R7u2R3JuBlEQQlyag44NQepnBVhWgxqYg3hzRyDeBC5qhdPSgqShxK0pRYZGAPbyBt+dBAkIgWcjxMmJwUeHwQPEQNbVAwHBwGjlRQWFzcqAAAEeklEQVR4nO2a24KqIBRABQyoxHtZak23qf//w2OdqQQRzaSZh70eesjbEja42eo4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAbWsewG8He/IqHmWm/UQh4nUB/Ocr8LNzHeTJNosUqFdzBNr2Ie5g+ORZYpzTjxQLVOSwvgWdPi7jS1SZNKUq230hDkelu4DNSBH/plCp2pa3G6pLCImlxqlj4dqw6pLA4tTshlLcMDKtSzG2xuXO00lZGKeofO6TQknxaytEOO5mV91kptu52Qigcv61MUvjcRyrhn5Tq11AoyUaPdVNLLZXL50XpuulqWv9vU1iYQdulKD9Im85pgBkhmATF888o++zoI0Jup/Xsbuvdt5xKO8lCuxRLpS2rWpPg/wctMmZDySTlraQt0sjHlfChnNtKXgxSUpxv5OeJlyx9G9HUKSXldRu5VWhgqee6pOSWUvIBq1m6QSqWtrg2m6a3FC6kLUvbK5heUqyUtqD9/A9I0a0shQqL462vlMPV7HwhZp/pQ4MUaS5jFsL5RLybpHSpy9L1mPXmMqUu86nGCu1SbltrSDqcrLi1x16nlOPEeiuEvgWxOBTNS6ygTaoKrszeUOxYjJoWyNbSqa5lOwnbpdBubym0OgscoWmRHAkr5aDuUlCmnRh+OLoWFsh9imZ4b7BCewtt1S3lUCZyg9Vl/HDvIVXtNF8bSh3p6D3YS6qaG3y3taJ32o49j/aUqnachW3Fz3xkp/5S1a40KzZaq3LksHpB6rpgd1JdzCcj999LUteiuuM2tc7uuFYvSlUwb93QKn5b6hpchSIV+b8u9Si7PAn+gJSjPnrEqP3X49mnPS6IpOPWH5Uigb6AqFSv0ndmKjpT3lso6yhFinoiP2lLiEqd751cAWfLWL5x5eTyS0jGr+WgWNdUSqVhuBTB6RGd5Zhk8uiudwPD+93/P2fqmaruaz/uFSgRtxzyIHWHL7+HfVY2CV0/Uk5NbcqXJ9CBUzp+LOLqTU0z6dxo+yNMZ1mtkLdZq2Ugr9Qf9xLEqcXO5ZGVUSwnbwmnP67y4EKTQA42ZZFzGjJ5zoV08YvHbl8hMCUy0PLeEOobEJS7c3z7bqH68eZ7JYVZDHDylftGm1JkPBOpmh7de5ZyzQusItzyIODbcNLYlA4IKdrMGU9JkjQv/AgNoj5yb+yiPI8Ozf83Q0KKBvqMUSV6xjM2LWBU4kHlUHzpdfLawCZb42t2mUFjr2qrRuRqkMJVHWAGhq78enWgvFTCZfcRN6LBGQLJdp03rCwqcb+2St74YKIzSFaNG8ah4ZOSO1P+TjmIZZHp5F+aEUT81vrinTh4L70j7SXMaj2pPTeloWZaerJJydtlMy9sqVN8ZW1FCkLK1hnrpDwRB0J88d0I+F0sqKEPmC+WmrrZJtoH7zfTj5bH08kzuM75pORdZV4y891LXI/I/CsV3pjVMkqoH3DhuutQ8MCnfW6XEuLcDlqXpXs7ilkoo1dXqXjx08jrQYyRsToNAAAA+Ov8A4DIOPd0zau5AAAAAElFTkSuQmCC"></img>

      {num}

      <p>{1+2}</p>

      <h2>{name}</h2>
      {
        nums.map( ( v, i) => (
          <h1>{v}</h1>
        ) )
      }

      {
        
      }
    </div>
  );
}