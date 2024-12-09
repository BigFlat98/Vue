<template>
<div>
    <div id="G_OAuth_btn" style="display: flex; justify-content: center;"></div>
    <div>
        <h3>googleUser</h3>
        <pre>{{googleUser.name}}</pre>
        <h3>googleUser email</h3>
        <pre>{{googleUser.email}}</pre>
    </div>
</div>
</template>


<script>
import VueJwtDecode from 'vue-jwt-decode'
export default{ 
    name:'',
    components:{},
    data(){
        return{
            googleUser:{},
        };
    },
    setup(){},
    created(){},
    mounted(){this.googleInit()},
    unmounted(){},
    methods:{
         googleInit(){
            let google = window.google;
            google.accounts.id.initialize({
                client_id:"242974382853-b8v16aecpkn6ts5mq7o3snch30h0lv5l.apps.googleusercontent.com",
                callback:this.googleCallback
            });
            google.accounts.id.renderButton(document.getElementById('G_OAuth_btn'),{
                theme:'dark',
                size:'large',
                width:'400px',
                text:'continue_with',
                logo_alignment:'left'
            })
        },
        googleCallback(res){
            console.log('res:',res);

            let decodedUser = VueJwtDecode.decode(res.credential);

            for (let key in decodedUser) {
                if (typeof decodedUser[key] === 'string') {
                    decodedUser[key] = decodeURIComponent(escape(decodedUser[key]));
                }
            }

            this.googleUser = decodedUser;
            console.log('this.googleUser:',this.googleUser);
        }
    },
    computed:{},
    watch:{}
}
</script>