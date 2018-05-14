// components
import Layout from '../components/Layout';


const Portfolio = () => (
  <Layout>
    <div className='portfolio'>
      {/* <p>Portfolio</p> */}

      <div className='main-row'>
        <div className='row'>
          <div className='column'>
            <div className='project-1'>1</div>
            <div className='project-2'>2</div>
          </div>
          <div className='column'>
            <div className='project-3'>3</div>
          </div>
          <div className='row project-4'>4</div>
        </div>

        <div className='column project-5'>5</div>
      </div>
    </div>
  </Layout>
);

export default Portfolio;
