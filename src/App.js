import './App.css';
import Card from './components/card'
import Ala from './ala.jpg'

function App() {

  const list = [
    {
      img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      avatar: Ala,
      title: 'Card title 1',
      description: 'Card description 1'
    },
    {
      img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      avatar: Ala,
      title: 'Card title 1',
      description: 'Card description 1'
    },
    {
      img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      avatar: Ala,
      title: 'Card title 1',
      description: 'Card description 1'
    },
    {
      img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      title: 'Card title 1',
      description: 'Card description 1'
    }
  ]
  return (
    <div className="container">
      <div className='row'>
        {list.map((item, index) => {
          return (
            <div className='col-auto mb-3' key={index}>
              <Card item={item} name='Aladin' />
            </div>
          )
        })}
        {list.map((item, index) => {
          return (
            <div className='col-auto mb-3' key={index}>
              <Card item={item}  />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
