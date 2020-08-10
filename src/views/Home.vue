<script>
// @ is an alias to /src
// import HomePage from '@/components/HomePage.vue'

export default {
    data() {
        return {
            columns: [1,2,3,4,5,6],
        };
    },

    render() {
        return(
            <div>
                <div>{this.$store.state.count}</div>
                <van-grid column-num={3}>
                    {this.columns.map((item) => {
                        return <van-grid-item key={item} icon="photo-o" text="文字" />
                    })}
                </van-grid>
            </div>
        )
    }
}
</script>


