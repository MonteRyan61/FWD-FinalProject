import React from "react";
import './MainContainer.css';
import Search from "./Search";
import CookingTitles from "./CookingTitles";
import Ingredents from "./ingredents";

export default class MainContainer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            Header: 'College Cook',
            toggle: true,
            showing: "Steak",
            searchArray: [],

            // Start off on a default search of steak
            listRecipes: ['Skirt Steak and Hanger Steak', 'Salt-And-Pepper Steak', 'Pan-Fried Steak', 'Steak Bites', 'Rump steak', 'Steak Teriyaki recipes', 'Perfect Porterhouse Steak recipes', 'Vietnamese Sugar Steak', 'Panfried Flank Steak', 'Sous-vide steak'],
            listImages: [
                "https://edamam-product-images.s3.amazonaws.com/web-img/28e/28e26b8817b74263d70dd9480c112d83.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLWVhc3QtMSJHMEUCIHYvtDmO%2FqQAsvsTVWBLpwHQ6vnRMSdryadgx059xcF%2FAiEAzhhega2LZ8LXoEYg5HCekdZ9WD5PYkSREFQIhe1dLGsqzAQINxAAGgwxODcwMTcxNTA5ODYiDGNZ%2FILmCRXqKYst8iqpBDdTCtAHVkwuubv0kmTU3PB8dPg9JOcbiHm3PrOYBZjMWJNVKORMX1dwba3tEFNJM7b%2BFjTs5llMl8585SWQ%2BiF7JrPGUv%2FkIlsaAN7xCqmpM%2BVoPYBjNVtni8A0mft%2BOCYtPplxTpnKL7W2frdGNS2pQPovzhPJorw8V8s2SnTxboXW5O91r%2BK0o%2Ftd0U6UoGQZlAf0c%2BGzinMAFTv3XIztz26vdaN6somF%2BEFeN9JTNlUWBYI5MdxbGTTq2sRXhJIwT%2FjNbHSapb2jlT6Fr%2Bt%2BPG2FWKvyC4qSUpX8hSicHEiS%2B6s2erXblrwihzXKZsE%2BfxT92rkQuNmasRviJ2StsfAXUKmmNEYGQRirUK5OjwOAmX0aP5ecf9bzN%2BcGYNjWCdg%2Fk4bLc1xNTOVDuoTz6U6SjFu6i1ATExqvNZbiqjXIaCiyc9XjBnYkBRmQoOUEQTyPveqVId2frbvHbANJLRlcJ1enyUO4eZfXegzi6GCUHafn0a81rxvBzSYLQFnhNq1vJWwFk2DcywBkOtId8e8vG1y%2BWzXdMQPpMpragos%2FLgN87dvVmTiP%2Fq6Kp%2Bf3VdU1%2F4FE5ps9Am%2Fkr142C0bEKHe8km6atjtyDjF8FNx9HA3HnIdaVSoMCsGSrVZm%2FT5bPGWF%2FfGNTGD7r04vf3yU8V21AjCr%2Bc8IMeM7t%2Bl8J2chIO9vhQ1CikcEch5LiWYdSKWnhucfMbjUsPhb57z17O%2BfcOUwu5XEnAY6qQEJ31Mj55Urh8jhva6%2FqcM45M8C90b85j7W9BN%2FacKo4KpaI3geqMVCUQCmKA7tU%2BaQrMAD6f24wHDYUnvyWO87Fg4oKnYEGuRPYHiKE4AUU9aBM4gs3PLRiykb%2BE3a7uuNBaoItXWCPZDlwKUo7ZYJljhtsAr10r%2FmqxOxl3Qo8K6RK9iLaiNh7m7Vt%2BQNR2xbhp4bZOqRj%2BkdFfDqPMp1oKDvETK%2BmWKC&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221207T223205Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEVIBZUYH%2F20221207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1a7bb1596e7343f7fb41ac435cb1e27a347e11f9b7735058a53231a284a20b7b",
                "https://edamam-product-images.s3.amazonaws.com/web-img/69a/69a185e15ae107444f63acfeef439fdd.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLWVhc3QtMSJHMEUCIHYvtDmO%2FqQAsvsTVWBLpwHQ6vnRMSdryadgx059xcF%2FAiEAzhhega2LZ8LXoEYg5HCekdZ9WD5PYkSREFQIhe1dLGsqzAQINxAAGgwxODcwMTcxNTA5ODYiDGNZ%2FILmCRXqKYst8iqpBDdTCtAHVkwuubv0kmTU3PB8dPg9JOcbiHm3PrOYBZjMWJNVKORMX1dwba3tEFNJM7b%2BFjTs5llMl8585SWQ%2BiF7JrPGUv%2FkIlsaAN7xCqmpM%2BVoPYBjNVtni8A0mft%2BOCYtPplxTpnKL7W2frdGNS2pQPovzhPJorw8V8s2SnTxboXW5O91r%2BK0o%2Ftd0U6UoGQZlAf0c%2BGzinMAFTv3XIztz26vdaN6somF%2BEFeN9JTNlUWBYI5MdxbGTTq2sRXhJIwT%2FjNbHSapb2jlT6Fr%2Bt%2BPG2FWKvyC4qSUpX8hSicHEiS%2B6s2erXblrwihzXKZsE%2BfxT92rkQuNmasRviJ2StsfAXUKmmNEYGQRirUK5OjwOAmX0aP5ecf9bzN%2BcGYNjWCdg%2Fk4bLc1xNTOVDuoTz6U6SjFu6i1ATExqvNZbiqjXIaCiyc9XjBnYkBRmQoOUEQTyPveqVId2frbvHbANJLRlcJ1enyUO4eZfXegzi6GCUHafn0a81rxvBzSYLQFnhNq1vJWwFk2DcywBkOtId8e8vG1y%2BWzXdMQPpMpragos%2FLgN87dvVmTiP%2Fq6Kp%2Bf3VdU1%2F4FE5ps9Am%2Fkr142C0bEKHe8km6atjtyDjF8FNx9HA3HnIdaVSoMCsGSrVZm%2FT5bPGWF%2FfGNTGD7r04vf3yU8V21AjCr%2Bc8IMeM7t%2Bl8J2chIO9vhQ1CikcEch5LiWYdSKWnhucfMbjUsPhb57z17O%2BfcOUwu5XEnAY6qQEJ31Mj55Urh8jhva6%2FqcM45M8C90b85j7W9BN%2FacKo4KpaI3geqMVCUQCmKA7tU%2BaQrMAD6f24wHDYUnvyWO87Fg4oKnYEGuRPYHiKE4AUU9aBM4gs3PLRiykb%2BE3a7uuNBaoItXWCPZDlwKUo7ZYJljhtsAr10r%2FmqxOxl3Qo8K6RK9iLaiNh7m7Vt%2BQNR2xbhp4bZOqRj%2BkdFfDqPMp1oKDvETK%2BmWKC&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221207T223205Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEVIBZUYH%2F20221207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f601baa5a4c048323d6f27679030bf4e0845690aef94816e0f25a344834f2ff2",
                "https://edamam-product-images.s3.amazonaws.com/web-img/4c8/4c82dad530271be7c5e91205e2fc5931.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLWVhc3QtMSJHMEUCIHYvtDmO%2FqQAsvsTVWBLpwHQ6vnRMSdryadgx059xcF%2FAiEAzhhega2LZ8LXoEYg5HCekdZ9WD5PYkSREFQIhe1dLGsqzAQINxAAGgwxODcwMTcxNTA5ODYiDGNZ%2FILmCRXqKYst8iqpBDdTCtAHVkwuubv0kmTU3PB8dPg9JOcbiHm3PrOYBZjMWJNVKORMX1dwba3tEFNJM7b%2BFjTs5llMl8585SWQ%2BiF7JrPGUv%2FkIlsaAN7xCqmpM%2BVoPYBjNVtni8A0mft%2BOCYtPplxTpnKL7W2frdGNS2pQPovzhPJorw8V8s2SnTxboXW5O91r%2BK0o%2Ftd0U6UoGQZlAf0c%2BGzinMAFTv3XIztz26vdaN6somF%2BEFeN9JTNlUWBYI5MdxbGTTq2sRXhJIwT%2FjNbHSapb2jlT6Fr%2Bt%2BPG2FWKvyC4qSUpX8hSicHEiS%2B6s2erXblrwihzXKZsE%2BfxT92rkQuNmasRviJ2StsfAXUKmmNEYGQRirUK5OjwOAmX0aP5ecf9bzN%2BcGYNjWCdg%2Fk4bLc1xNTOVDuoTz6U6SjFu6i1ATExqvNZbiqjXIaCiyc9XjBnYkBRmQoOUEQTyPveqVId2frbvHbANJLRlcJ1enyUO4eZfXegzi6GCUHafn0a81rxvBzSYLQFnhNq1vJWwFk2DcywBkOtId8e8vG1y%2BWzXdMQPpMpragos%2FLgN87dvVmTiP%2Fq6Kp%2Bf3VdU1%2F4FE5ps9Am%2Fkr142C0bEKHe8km6atjtyDjF8FNx9HA3HnIdaVSoMCsGSrVZm%2FT5bPGWF%2FfGNTGD7r04vf3yU8V21AjCr%2Bc8IMeM7t%2Bl8J2chIO9vhQ1CikcEch5LiWYdSKWnhucfMbjUsPhb57z17O%2BfcOUwu5XEnAY6qQEJ31Mj55Urh8jhva6%2FqcM45M8C90b85j7W9BN%2FacKo4KpaI3geqMVCUQCmKA7tU%2BaQrMAD6f24wHDYUnvyWO87Fg4oKnYEGuRPYHiKE4AUU9aBM4gs3PLRiykb%2BE3a7uuNBaoItXWCPZDlwKUo7ZYJljhtsAr10r%2FmqxOxl3Qo8K6RK9iLaiNh7m7Vt%2BQNR2xbhp4bZOqRj%2BkdFfDqPMp1oKDvETK%2BmWKC&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221207T223205Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEVIBZUYH%2F20221207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3bbe550804bba58f8f3c04fffa05825bbe14bbe3b88192b547fe14b9541786d0",
                "https://edamam-product-images.s3.amazonaws.com/web-img/705/705f9836e39fcd98464340791e9ca8bc.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLWVhc3QtMSJHMEUCIHYvtDmO%2FqQAsvsTVWBLpwHQ6vnRMSdryadgx059xcF%2FAiEAzhhega2LZ8LXoEYg5HCekdZ9WD5PYkSREFQIhe1dLGsqzAQINxAAGgwxODcwMTcxNTA5ODYiDGNZ%2FILmCRXqKYst8iqpBDdTCtAHVkwuubv0kmTU3PB8dPg9JOcbiHm3PrOYBZjMWJNVKORMX1dwba3tEFNJM7b%2BFjTs5llMl8585SWQ%2BiF7JrPGUv%2FkIlsaAN7xCqmpM%2BVoPYBjNVtni8A0mft%2BOCYtPplxTpnKL7W2frdGNS2pQPovzhPJorw8V8s2SnTxboXW5O91r%2BK0o%2Ftd0U6UoGQZlAf0c%2BGzinMAFTv3XIztz26vdaN6somF%2BEFeN9JTNlUWBYI5MdxbGTTq2sRXhJIwT%2FjNbHSapb2jlT6Fr%2Bt%2BPG2FWKvyC4qSUpX8hSicHEiS%2B6s2erXblrwihzXKZsE%2BfxT92rkQuNmasRviJ2StsfAXUKmmNEYGQRirUK5OjwOAmX0aP5ecf9bzN%2BcGYNjWCdg%2Fk4bLc1xNTOVDuoTz6U6SjFu6i1ATExqvNZbiqjXIaCiyc9XjBnYkBRmQoOUEQTyPveqVId2frbvHbANJLRlcJ1enyUO4eZfXegzi6GCUHafn0a81rxvBzSYLQFnhNq1vJWwFk2DcywBkOtId8e8vG1y%2BWzXdMQPpMpragos%2FLgN87dvVmTiP%2Fq6Kp%2Bf3VdU1%2F4FE5ps9Am%2Fkr142C0bEKHe8km6atjtyDjF8FNx9HA3HnIdaVSoMCsGSrVZm%2FT5bPGWF%2FfGNTGD7r04vf3yU8V21AjCr%2Bc8IMeM7t%2Bl8J2chIO9vhQ1CikcEch5LiWYdSKWnhucfMbjUsPhb57z17O%2BfcOUwu5XEnAY6qQEJ31Mj55Urh8jhva6%2FqcM45M8C90b85j7W9BN%2FacKo4KpaI3geqMVCUQCmKA7tU%2BaQrMAD6f24wHDYUnvyWO87Fg4oKnYEGuRPYHiKE4AUU9aBM4gs3PLRiykb%2BE3a7uuNBaoItXWCPZDlwKUo7ZYJljhtsAr10r%2FmqxOxl3Qo8K6RK9iLaiNh7m7Vt%2BQNR2xbhp4bZOqRj%2BkdFfDqPMp1oKDvETK%2BmWKC&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221207T223205Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEVIBZUYH%2F20221207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5d2ec86bf8989b47935517bfb76ab175d5ddefb8fee1885f13886faf479b38d5",
                "https://edamam-product-images.s3.amazonaws.com/web-img/b5d/b5d448a14468adae3c7ce7986ff99df4.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLWVhc3QtMSJHMEUCIHYvtDmO%2FqQAsvsTVWBLpwHQ6vnRMSdryadgx059xcF%2FAiEAzhhega2LZ8LXoEYg5HCekdZ9WD5PYkSREFQIhe1dLGsqzAQINxAAGgwxODcwMTcxNTA5ODYiDGNZ%2FILmCRXqKYst8iqpBDdTCtAHVkwuubv0kmTU3PB8dPg9JOcbiHm3PrOYBZjMWJNVKORMX1dwba3tEFNJM7b%2BFjTs5llMl8585SWQ%2BiF7JrPGUv%2FkIlsaAN7xCqmpM%2BVoPYBjNVtni8A0mft%2BOCYtPplxTpnKL7W2frdGNS2pQPovzhPJorw8V8s2SnTxboXW5O91r%2BK0o%2Ftd0U6UoGQZlAf0c%2BGzinMAFTv3XIztz26vdaN6somF%2BEFeN9JTNlUWBYI5MdxbGTTq2sRXhJIwT%2FjNbHSapb2jlT6Fr%2Bt%2BPG2FWKvyC4qSUpX8hSicHEiS%2B6s2erXblrwihzXKZsE%2BfxT92rkQuNmasRviJ2StsfAXUKmmNEYGQRirUK5OjwOAmX0aP5ecf9bzN%2BcGYNjWCdg%2Fk4bLc1xNTOVDuoTz6U6SjFu6i1ATExqvNZbiqjXIaCiyc9XjBnYkBRmQoOUEQTyPveqVId2frbvHbANJLRlcJ1enyUO4eZfXegzi6GCUHafn0a81rxvBzSYLQFnhNq1vJWwFk2DcywBkOtId8e8vG1y%2BWzXdMQPpMpragos%2FLgN87dvVmTiP%2Fq6Kp%2Bf3VdU1%2F4FE5ps9Am%2Fkr142C0bEKHe8km6atjtyDjF8FNx9HA3HnIdaVSoMCsGSrVZm%2FT5bPGWF%2FfGNTGD7r04vf3yU8V21AjCr%2Bc8IMeM7t%2Bl8J2chIO9vhQ1CikcEch5LiWYdSKWnhucfMbjUsPhb57z17O%2BfcOUwu5XEnAY6qQEJ31Mj55Urh8jhva6%2FqcM45M8C90b85j7W9BN%2FacKo4KpaI3geqMVCUQCmKA7tU%2BaQrMAD6f24wHDYUnvyWO87Fg4oKnYEGuRPYHiKE4AUU9aBM4gs3PLRiykb%2BE3a7uuNBaoItXWCPZDlwKUo7ZYJljhtsAr10r%2FmqxOxl3Qo8K6RK9iLaiNh7m7Vt%2BQNR2xbhp4bZOqRj%2BkdFfDqPMp1oKDvETK%2BmWKC&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221207T223205Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEVIBZUYH%2F20221207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9b1fe860254247e468721f8ff1f37491b6fab4241d5d1ed470fb4ce6d54b9695",
                "https://edamam-product-images.s3.amazonaws.com/web-img/1ab/1abd0d75240a799f4985de6b17f6645f?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLWVhc3QtMSJHMEUCIHYvtDmO%2FqQAsvsTVWBLpwHQ6vnRMSdryadgx059xcF%2FAiEAzhhega2LZ8LXoEYg5HCekdZ9WD5PYkSREFQIhe1dLGsqzAQINxAAGgwxODcwMTcxNTA5ODYiDGNZ%2FILmCRXqKYst8iqpBDdTCtAHVkwuubv0kmTU3PB8dPg9JOcbiHm3PrOYBZjMWJNVKORMX1dwba3tEFNJM7b%2BFjTs5llMl8585SWQ%2BiF7JrPGUv%2FkIlsaAN7xCqmpM%2BVoPYBjNVtni8A0mft%2BOCYtPplxTpnKL7W2frdGNS2pQPovzhPJorw8V8s2SnTxboXW5O91r%2BK0o%2Ftd0U6UoGQZlAf0c%2BGzinMAFTv3XIztz26vdaN6somF%2BEFeN9JTNlUWBYI5MdxbGTTq2sRXhJIwT%2FjNbHSapb2jlT6Fr%2Bt%2BPG2FWKvyC4qSUpX8hSicHEiS%2B6s2erXblrwihzXKZsE%2BfxT92rkQuNmasRviJ2StsfAXUKmmNEYGQRirUK5OjwOAmX0aP5ecf9bzN%2BcGYNjWCdg%2Fk4bLc1xNTOVDuoTz6U6SjFu6i1ATExqvNZbiqjXIaCiyc9XjBnYkBRmQoOUEQTyPveqVId2frbvHbANJLRlcJ1enyUO4eZfXegzi6GCUHafn0a81rxvBzSYLQFnhNq1vJWwFk2DcywBkOtId8e8vG1y%2BWzXdMQPpMpragos%2FLgN87dvVmTiP%2Fq6Kp%2Bf3VdU1%2F4FE5ps9Am%2Fkr142C0bEKHe8km6atjtyDjF8FNx9HA3HnIdaVSoMCsGSrVZm%2FT5bPGWF%2FfGNTGD7r04vf3yU8V21AjCr%2Bc8IMeM7t%2Bl8J2chIO9vhQ1CikcEch5LiWYdSKWnhucfMbjUsPhb57z17O%2BfcOUwu5XEnAY6qQEJ31Mj55Urh8jhva6%2FqcM45M8C90b85j7W9BN%2FacKo4KpaI3geqMVCUQCmKA7tU%2BaQrMAD6f24wHDYUnvyWO87Fg4oKnYEGuRPYHiKE4AUU9aBM4gs3PLRiykb%2BE3a7uuNBaoItXWCPZDlwKUo7ZYJljhtsAr10r%2FmqxOxl3Qo8K6RK9iLaiNh7m7Vt%2BQNR2xbhp4bZOqRj%2BkdFfDqPMp1oKDvETK%2BmWKC&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221207T223205Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEVIBZUYH%2F20221207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=39164b090f942618ea88aa025201a8ab6e81078b76aed76d0733f2c680bb5c06",
                "https://edamam-product-images.s3.amazonaws.com/web-img/d30/d30083c0e56c915a136b8637e623ef3e?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLWVhc3QtMSJHMEUCIHYvtDmO%2FqQAsvsTVWBLpwHQ6vnRMSdryadgx059xcF%2FAiEAzhhega2LZ8LXoEYg5HCekdZ9WD5PYkSREFQIhe1dLGsqzAQINxAAGgwxODcwMTcxNTA5ODYiDGNZ%2FILmCRXqKYst8iqpBDdTCtAHVkwuubv0kmTU3PB8dPg9JOcbiHm3PrOYBZjMWJNVKORMX1dwba3tEFNJM7b%2BFjTs5llMl8585SWQ%2BiF7JrPGUv%2FkIlsaAN7xCqmpM%2BVoPYBjNVtni8A0mft%2BOCYtPplxTpnKL7W2frdGNS2pQPovzhPJorw8V8s2SnTxboXW5O91r%2BK0o%2Ftd0U6UoGQZlAf0c%2BGzinMAFTv3XIztz26vdaN6somF%2BEFeN9JTNlUWBYI5MdxbGTTq2sRXhJIwT%2FjNbHSapb2jlT6Fr%2Bt%2BPG2FWKvyC4qSUpX8hSicHEiS%2B6s2erXblrwihzXKZsE%2BfxT92rkQuNmasRviJ2StsfAXUKmmNEYGQRirUK5OjwOAmX0aP5ecf9bzN%2BcGYNjWCdg%2Fk4bLc1xNTOVDuoTz6U6SjFu6i1ATExqvNZbiqjXIaCiyc9XjBnYkBRmQoOUEQTyPveqVId2frbvHbANJLRlcJ1enyUO4eZfXegzi6GCUHafn0a81rxvBzSYLQFnhNq1vJWwFk2DcywBkOtId8e8vG1y%2BWzXdMQPpMpragos%2FLgN87dvVmTiP%2Fq6Kp%2Bf3VdU1%2F4FE5ps9Am%2Fkr142C0bEKHe8km6atjtyDjF8FNx9HA3HnIdaVSoMCsGSrVZm%2FT5bPGWF%2FfGNTGD7r04vf3yU8V21AjCr%2Bc8IMeM7t%2Bl8J2chIO9vhQ1CikcEch5LiWYdSKWnhucfMbjUsPhb57z17O%2BfcOUwu5XEnAY6qQEJ31Mj55Urh8jhva6%2FqcM45M8C90b85j7W9BN%2FacKo4KpaI3geqMVCUQCmKA7tU%2BaQrMAD6f24wHDYUnvyWO87Fg4oKnYEGuRPYHiKE4AUU9aBM4gs3PLRiykb%2BE3a7uuNBaoItXWCPZDlwKUo7ZYJljhtsAr10r%2FmqxOxl3Qo8K6RK9iLaiNh7m7Vt%2BQNR2xbhp4bZOqRj%2BkdFfDqPMp1oKDvETK%2BmWKC&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221207T224018Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEVIBZUYH%2F20221207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=35c79da4604d5ae6837a9c28a6c302af8544e5964d931995aa65a6165b5bbbf7",
                "https://edamam-product-images.s3.amazonaws.com/web-img/0ce/0ceb02a442b8a784fdf2cb37c5a4bce2.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLWVhc3QtMSJHMEUCIHYvtDmO%2FqQAsvsTVWBLpwHQ6vnRMSdryadgx059xcF%2FAiEAzhhega2LZ8LXoEYg5HCekdZ9WD5PYkSREFQIhe1dLGsqzAQINxAAGgwxODcwMTcxNTA5ODYiDGNZ%2FILmCRXqKYst8iqpBDdTCtAHVkwuubv0kmTU3PB8dPg9JOcbiHm3PrOYBZjMWJNVKORMX1dwba3tEFNJM7b%2BFjTs5llMl8585SWQ%2BiF7JrPGUv%2FkIlsaAN7xCqmpM%2BVoPYBjNVtni8A0mft%2BOCYtPplxTpnKL7W2frdGNS2pQPovzhPJorw8V8s2SnTxboXW5O91r%2BK0o%2Ftd0U6UoGQZlAf0c%2BGzinMAFTv3XIztz26vdaN6somF%2BEFeN9JTNlUWBYI5MdxbGTTq2sRXhJIwT%2FjNbHSapb2jlT6Fr%2Bt%2BPG2FWKvyC4qSUpX8hSicHEiS%2B6s2erXblrwihzXKZsE%2BfxT92rkQuNmasRviJ2StsfAXUKmmNEYGQRirUK5OjwOAmX0aP5ecf9bzN%2BcGYNjWCdg%2Fk4bLc1xNTOVDuoTz6U6SjFu6i1ATExqvNZbiqjXIaCiyc9XjBnYkBRmQoOUEQTyPveqVId2frbvHbANJLRlcJ1enyUO4eZfXegzi6GCUHafn0a81rxvBzSYLQFnhNq1vJWwFk2DcywBkOtId8e8vG1y%2BWzXdMQPpMpragos%2FLgN87dvVmTiP%2Fq6Kp%2Bf3VdU1%2F4FE5ps9Am%2Fkr142C0bEKHe8km6atjtyDjF8FNx9HA3HnIdaVSoMCsGSrVZm%2FT5bPGWF%2FfGNTGD7r04vf3yU8V21AjCr%2Bc8IMeM7t%2Bl8J2chIO9vhQ1CikcEch5LiWYdSKWnhucfMbjUsPhb57z17O%2BfcOUwu5XEnAY6qQEJ31Mj55Urh8jhva6%2FqcM45M8C90b85j7W9BN%2FacKo4KpaI3geqMVCUQCmKA7tU%2BaQrMAD6f24wHDYUnvyWO87Fg4oKnYEGuRPYHiKE4AUU9aBM4gs3PLRiykb%2BE3a7uuNBaoItXWCPZDlwKUo7ZYJljhtsAr10r%2FmqxOxl3Qo8K6RK9iLaiNh7m7Vt%2BQNR2xbhp4bZOqRj%2BkdFfDqPMp1oKDvETK%2BmWKC&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221207T223205Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEVIBZUYH%2F20221207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1661b30d06fb78c2ebabf4e298c161fbec8a12dd5e6ca35b0c7223fda11730af",
                "https://edamam-product-images.s3.amazonaws.com/web-img/282/28272cdd5f3c3b2fe128ed91e54fcd01.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLWVhc3QtMSJHMEUCIHYvtDmO%2FqQAsvsTVWBLpwHQ6vnRMSdryadgx059xcF%2FAiEAzhhega2LZ8LXoEYg5HCekdZ9WD5PYkSREFQIhe1dLGsqzAQINxAAGgwxODcwMTcxNTA5ODYiDGNZ%2FILmCRXqKYst8iqpBDdTCtAHVkwuubv0kmTU3PB8dPg9JOcbiHm3PrOYBZjMWJNVKORMX1dwba3tEFNJM7b%2BFjTs5llMl8585SWQ%2BiF7JrPGUv%2FkIlsaAN7xCqmpM%2BVoPYBjNVtni8A0mft%2BOCYtPplxTpnKL7W2frdGNS2pQPovzhPJorw8V8s2SnTxboXW5O91r%2BK0o%2Ftd0U6UoGQZlAf0c%2BGzinMAFTv3XIztz26vdaN6somF%2BEFeN9JTNlUWBYI5MdxbGTTq2sRXhJIwT%2FjNbHSapb2jlT6Fr%2Bt%2BPG2FWKvyC4qSUpX8hSicHEiS%2B6s2erXblrwihzXKZsE%2BfxT92rkQuNmasRviJ2StsfAXUKmmNEYGQRirUK5OjwOAmX0aP5ecf9bzN%2BcGYNjWCdg%2Fk4bLc1xNTOVDuoTz6U6SjFu6i1ATExqvNZbiqjXIaCiyc9XjBnYkBRmQoOUEQTyPveqVId2frbvHbANJLRlcJ1enyUO4eZfXegzi6GCUHafn0a81rxvBzSYLQFnhNq1vJWwFk2DcywBkOtId8e8vG1y%2BWzXdMQPpMpragos%2FLgN87dvVmTiP%2Fq6Kp%2Bf3VdU1%2F4FE5ps9Am%2Fkr142C0bEKHe8km6atjtyDjF8FNx9HA3HnIdaVSoMCsGSrVZm%2FT5bPGWF%2FfGNTGD7r04vf3yU8V21AjCr%2Bc8IMeM7t%2Bl8J2chIO9vhQ1CikcEch5LiWYdSKWnhucfMbjUsPhb57z17O%2BfcOUwu5XEnAY6qQEJ31Mj55Urh8jhva6%2FqcM45M8C90b85j7W9BN%2FacKo4KpaI3geqMVCUQCmKA7tU%2BaQrMAD6f24wHDYUnvyWO87Fg4oKnYEGuRPYHiKE4AUU9aBM4gs3PLRiykb%2BE3a7uuNBaoItXWCPZDlwKUo7ZYJljhtsAr10r%2FmqxOxl3Qo8K6RK9iLaiNh7m7Vt%2BQNR2xbhp4bZOqRj%2BkdFfDqPMp1oKDvETK%2BmWKC&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221207T223205Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEVIBZUYH%2F20221207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8ab9fb5441e4e4c7e09e7db66abf5cf88eb9f8e4822a1cf5a611be604360d999",
                "https://edamam-product-images.s3.amazonaws.com/web-img/f35/f35a82bc580570f60c34c4d7e57c22f8?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLWVhc3QtMSJHMEUCIHYvtDmO%2FqQAsvsTVWBLpwHQ6vnRMSdryadgx059xcF%2FAiEAzhhega2LZ8LXoEYg5HCekdZ9WD5PYkSREFQIhe1dLGsqzAQINxAAGgwxODcwMTcxNTA5ODYiDGNZ%2FILmCRXqKYst8iqpBDdTCtAHVkwuubv0kmTU3PB8dPg9JOcbiHm3PrOYBZjMWJNVKORMX1dwba3tEFNJM7b%2BFjTs5llMl8585SWQ%2BiF7JrPGUv%2FkIlsaAN7xCqmpM%2BVoPYBjNVtni8A0mft%2BOCYtPplxTpnKL7W2frdGNS2pQPovzhPJorw8V8s2SnTxboXW5O91r%2BK0o%2Ftd0U6UoGQZlAf0c%2BGzinMAFTv3XIztz26vdaN6somF%2BEFeN9JTNlUWBYI5MdxbGTTq2sRXhJIwT%2FjNbHSapb2jlT6Fr%2Bt%2BPG2FWKvyC4qSUpX8hSicHEiS%2B6s2erXblrwihzXKZsE%2BfxT92rkQuNmasRviJ2StsfAXUKmmNEYGQRirUK5OjwOAmX0aP5ecf9bzN%2BcGYNjWCdg%2Fk4bLc1xNTOVDuoTz6U6SjFu6i1ATExqvNZbiqjXIaCiyc9XjBnYkBRmQoOUEQTyPveqVId2frbvHbANJLRlcJ1enyUO4eZfXegzi6GCUHafn0a81rxvBzSYLQFnhNq1vJWwFk2DcywBkOtId8e8vG1y%2BWzXdMQPpMpragos%2FLgN87dvVmTiP%2Fq6Kp%2Bf3VdU1%2F4FE5ps9Am%2Fkr142C0bEKHe8km6atjtyDjF8FNx9HA3HnIdaVSoMCsGSrVZm%2FT5bPGWF%2FfGNTGD7r04vf3yU8V21AjCr%2Bc8IMeM7t%2Bl8J2chIO9vhQ1CikcEch5LiWYdSKWnhucfMbjUsPhb57z17O%2BfcOUwu5XEnAY6qQEJ31Mj55Urh8jhva6%2FqcM45M8C90b85j7W9BN%2FacKo4KpaI3geqMVCUQCmKA7tU%2BaQrMAD6f24wHDYUnvyWO87Fg4oKnYEGuRPYHiKE4AUU9aBM4gs3PLRiykb%2BE3a7uuNBaoItXWCPZDlwKUo7ZYJljhtsAr10r%2FmqxOxl3Qo8K6RK9iLaiNh7m7Vt%2BQNR2xbhp4bZOqRj%2BkdFfDqPMp1oKDvETK%2BmWKC&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221207T223205Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEVIBZUYH%2F20221207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=939d4757777a7a1e5923abc76d05bfa06f9be5ebc6ec5cc9111241e8f6370cdc"
            ],
            listIngredients: ['5 to 6 ounces skirt steak or hanger steak*,Salt*,Mild-tasting olive oil, to coat, or as needed*', '1 1/2 pound skirt steak, cut into 4 pieces*,Salt*,Pepper*', '1 inch-thick boneless shell steak*,Olive oil*,Coarse salt and freshly ground pepper*', '1 lb Sirloin Steak (without Much Gristle) OR Pre-c…resh Ground Black Pepper To Taste*,2 tbsp Butter*', '2 x 200g rump steak about 2-3cm thick*,1 tbsp sunf…ashed once*,1 sprig thyme or rosemary (optional)*', '1/3 cup mirin rice wine*,1/3 cup sake*,1/3 cup soy…/2 to 2 lb flank steak or skirt steak*,olive oil*', '2”-thick Porterhouse steak, trimmed (about 2 lb.)*…round black pepper*,kosher salt*,unsalted butter*', '4 tablespoons fish sauce*,2 tablespoons brown suga…rt or flap steak*,1 tablespoon butter (optional)*', '2 tbsp. butter*,3 cloves garlic, peeled and crushe… olive oil*,1 tbsp. finely chopped curly parsley*', '1 (16-ounce) New York strip steak, at room tempera…,1 garlic clove, crushed*,2 springs sprigs thyme*'],
            listSources: [
                "http://www.cookstr.com/recipes/skirt-steak-and-hanger-steak",
                "https://www.epicurious.com/recipes/food/views/salt-and-pepper-steak-51236360",
                "https://www.marthastewart.com/315499/pan-fried-steak",
                "http://thepioneerwoman.com/cooking/2009/01/steak-bites/",
                "https://www.bbcgoodfood.com/recipes/rump-steak",
                "http://www.simplyrecipes.com/recipes/steak_teriyaki/",
                "http://www.bonappetit.com/recipe/perfect-porterhouse-steak",
                "https://food52.com/recipes/34678-vietnamese-sugar-steak",
                "http://www.saveur.com/article/Recipes/Panfried-Flank-Steak",
                "https://www.latimes.com/recipe/sous-vide-steak",
            ],
            currRecipe: "",
        
        };
    }

    // Creates a toggle for childData from CookingTitles
    handleToggleCallback = (childData) =>{
        this.setState({toggle: childData})
    }

    // Creates a toggle for Current Recipe from CookingTitles
    handleCurrRecipeCallback = (childData1) =>{
        // takes in current recipe as a parameter for the toggle
        this.setState({currRecipe: childData1})
    }

    handleShowing = (searchedForInSearch) =>{
        // takes in current recipe as a parameter for the toggle
        this.setState({showing: searchedForInSearch})
    }

    // gets the array of recipes from search which does the api request
    getSearchTitles = (searchArray) =>{
        // Gets the list of recipes that was search for
        //need to copy this over in a different way grrrr
        this.setState({listRecipes:  []})
        let buildListOfNames = []
        let buildListOfImg = []
        let buildListOfIngredient = []
        let buildListOfSources = []
        for(let i = 0; i < searchArray.length; i++)
        {
            buildListOfNames.push(searchArray[i].name)
            buildListOfImg.push(searchArray[i].img)
            buildListOfIngredient.push(searchArray[i].ingredients)
            buildListOfSources.push(searchArray[i].source)
        }
        this.setState({
            listRecipes: buildListOfNames,
            listImages: buildListOfImg,
            listIngredients: buildListOfIngredient,
            listSources: buildListOfSources,
        })
    }


    

    render(){
        return(
        <div className="Main-Container">
            <h1 className="Main-header">{this.state.Header}</h1>
            {/* The main toggle here will be set in the cooking titles component if one is clicked it will pass which was clicked and change the state here for a reload to hide the search and cooking titles and show ingredients. */}
            {this.state.toggle && <Search showing = {this.handleShowing} searchTitleCallback = {this.getSearchTitles} lastSearch = {this.state.showing} ></Search>}
            {/* {console.log("Recipe Titles " + this.state.listRecipes +" Recipe Images " + this.state.listImages )} */}
            {this.state.toggle && <CookingTitles 
                    searchRecipe = {this.state.listRecipes} 
                    searchImg = {this.state.listImages} 
                    currRecipeCallback = {this.handleCurrRecipeCallback} 
                    parentCallback = {this.handleToggleCallback}>
            </CookingTitles>}
            
            
            {!this.state.toggle && <Ingredents index = {this.state.currRecipe} 
                    sourceList = {this.state.listSources} 
                    searchImg = {this.state.listImages} 
                    searchRecipe = {this.state.listRecipes} 
                    listOfIngredients = {this.state.listIngredients} 
                    parentCallback = {this.handleToggleCallback}>
            </Ingredents>}
        </div>
        );
    }
}