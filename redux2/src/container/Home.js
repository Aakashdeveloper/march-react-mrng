import React,{Component} from 'react';
import {connect} from 'react-redux';
import {latestNews,articleNews,galleryNews} from '../actions/actionfile';
import LatestNews  from '../component/Home/latestNews';
import ArticleNews from '../component/Home/articleNews';
import GalleryNews from '../component/Home/galleryDisplay'

class Home extends Component{
    componentDidMount(){
        this.props.dispatch(latestNews())
        this.props.dispatch(articleNews())
        this.props.dispatch(galleryNews())
    }

    render(){
        return(
            <div>
                <LatestNews ldata={this.props.datalist.latestNews}/>
                <ArticleNews adata={this.props.datalist.articleNews}/>
                <GalleryNews gdata={this.props.gallist.galleryNews}/>
            </div>
        )
    }

}

function mapStateToProps(state){
    return{
        datalist:state.article,
        gallist:state.gallery
    }
}

export default connect(mapStateToProps)(Home)