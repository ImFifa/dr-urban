import React from "react"
import Table from 'react-bootstrap/Table'

const Header = () => (
  <header id="uvod">
    <div className="heading">
    <h1>Praktický lékař pro dospělé</h1>
    <p>Jiráskovo nám. 496, 439 42 Postoloprty</p>
    </div>
    
    <svg xmlns="http://www.w3.org/2000/svg" width="1087" height="783" fill="none" viewBox="0 0 1087 783"><g clip-path="url(#clip0)"><path fill="#087BC5" d="M631 138c-69.6-2.4-136-24.9-199.2-49.5-63.3-24.6-126-51.8-194-64.8-43.7-8.4-93.7-9.6-129 13.8C75 60.1 64 99 58.1 135.1c-4.4 27.2-7 55.8 5.1 81.3 8.4 17.6 23.4 32.5 33.8 49.4 36 58.9 10.5 131.5-28.5 189-18.3 27-39.5 52.7-53.7 81.4-14 28.7-20.6 61.6-8.3 90.9 12.3 29 41.5 50.8 73 66.1 64.3 31.1 140 40 213.8 45.1 163.3 11.2 327.5 6.4 491.3 1.5 60.6-1.8 121.5-3.6 181.1-13 33.1-5.2 67.3-13.4 91.3-33.4 30.5-25.3 38.1-68.2 17.7-100-34.3-53.1-129.2-66.4-153.1-123.5-13.2-31.5.3-66.5 19.5-95.7 41.1-62.6 110-117.4 113.7-189 2.5-49.1-30.6-98.3-81.9-121.6-53.7-24.3-128.2-21.3-167.8 19-40.9 41.6-112.6 57.6-174 55.4z" opacity=".5"/><path stroke="#535461" stroke-miterlimit="10" stroke-width="2" d="M242.3 725s-55-41.5-65.4-94.4a104.5 104.5 0 00-32.3-57.7c-8-7.2-16.6-13.6-25.7-19.2"/><path fill="#10316C" d="M112.2 520.3c4.8 6.6 7 34.2 7 34.2s-25.8-10.2-30.7-16.7a14.7 14.7 0 0123.7-17.5zM158.4 542c.5 8.1-12.7 32.5-12.7 32.5s-16.1-22.5-16.6-30.6a14.7 14.7 0 0129.3-1.9zM203.2 604.3c-3.7 7.3-27.4 21.7-27.4 21.7s-2.5-27.6 1.1-34.9a14.7 14.7 0 0126.3 13.2zM226.5 659.1c-2.4 7.8-23.3 26-23.3 26s-7.2-26.8-4.8-34.6a14.7 14.7 0 0128 8.6zM121.9 594c8 1.2 33.3-10.3 33.3-10.3s-21.4-17.6-29.4-18.7a14.7 14.7 0 00-4 29zM150 657.8c8-1.4 28.6-19.8 28.6-19.8s-25.7-10.5-33.7-9.1a14.7 14.7 0 105 28.9zM185.7 716c8 0 31.6-14.7 31.6-14.7s-23.5-14.7-31.7-14.7a14.7 14.7 0 000 29.4z"/><path stroke="#535461" stroke-miterlimit="10" stroke-width="2" d="M776.5 365.4s34-60 85-77.3c21.5-7.2 40-21 53-39.6 6-9 11.2-18.3 15.6-28.2"/><path fill="#10316C" d="M962.1 209.3c-5.8 5.7-32.9 11.5-32.9 11.5s6.7-26.9 12.5-32.5a14.7 14.7 0 0120.4 21zM946.8 258c-8 1.6-33.8-8.3-33.8-8.3s20.1-19 28.1-20.5a14.7 14.7 0 115.7 28.8zM891 310.6c-7.6-2.6-25-24.2-25-24.2s27-6.1 34.7-3.5a14.7 14.7 0 11-9.6 27.8zM839.8 341c-8-1.3-28.7-19.7-28.7-19.7s25.5-10.6 33.5-9.3a14.7 14.7 0 11-4.7 29zM890.4 228.7c0 8.1 14.7 31.6 14.7 31.6s14.6-23.5 14.6-31.6a14.7 14.7 0 10-29.3 0zM831 265c2.4 7.7 23.4 25.8 23.4 25.8s7-26.9 4.6-34.6a14.7 14.7 0 00-28 8.8zM778 308.1c1.1 8 18.8 29.4 18.8 29.4s11.4-25.3 10.4-33.3a14.7 14.7 0 10-29.1 4z"/><path fill="#000" d="M962.1 209.3c-5.8 5.7-32.9 11.5-32.9 11.5s6.7-26.9 12.5-32.5a14.7 14.7 0 0120.4 21zM946.8 258c-8 1.6-33.8-8.3-33.8-8.3s20.1-19 28.1-20.5a14.7 14.7 0 115.7 28.8zM891 310.6c-7.6-2.6-25-24.2-25-24.2s27-6.1 34.7-3.5a14.7 14.7 0 11-9.6 27.8zM839.8 341c-8-1.3-28.7-19.7-28.7-19.7s25.5-10.6 33.5-9.3a14.7 14.7 0 11-4.7 29zM890.4 228.7c0 8.1 14.7 31.6 14.7 31.6s14.6-23.5 14.6-31.6a14.7 14.7 0 10-29.3 0zM831 265c2.4 7.7 23.4 25.8 23.4 25.8s7-26.9 4.6-34.6a14.7 14.7 0 00-28 8.8zM778 308.1c1.1 8 18.8 29.4 18.8 29.4s11.4-25.3 10.4-33.3a14.7 14.7 0 10-29.1 4z" opacity=".3"/><path stroke="#535461" stroke-miterlimit="10" stroke-width="2" d="M778.5 364.2s6.7-68.6 46.3-105.1c16.7-15.2 28.1-35.5 32.4-57.7 1.9-10.5 2.9-21.2 2.8-32"/><path fill="#10316C" d="M885 146.3c-3 7.5-25.5 23.8-25.5 23.8s-4.9-27.3-1.8-34.8a14.7 14.7 0 1127.2 11zM890.6 197c-6.6 4.7-34.3 6.2-34.3 6.2s10.8-25.5 17.4-30.2a14.7 14.7 0 1117 24zM861 267.8c-8.1.7-32.8-12-32.8-12s22.2-16.6 30.3-17.3a14.7 14.7 0 112.5 29.3zM826.5 316.3c-7.9 2-34.3-6.3-34.3-6.3s19-20.1 26.9-22.1a14.7 14.7 0 117.4 28.4zM827.1 193.1c3.3 7.4 26.3 23 26.3 23s3.9-27.4.6-34.8A14.7 14.7 0 00827 193zM787.5 250.3c5.4 6.1 31.9 14.1 31.9 14.1s-4.5-27.3-9.8-33.4a14.7 14.7 0 10-22 19.3zM756.6 311.3c4.3 6.9 29 19.2 29 19.2s.3-27.7-4-34.6a14.7 14.7 0 00-25 15.4z"/><path fill="url(#paint0_linear)" d="M727.5 95.4c1.7-6 3.7-12.2 5-18.4-1.6 6.2-3.6 12.3-5 18.4z"/><path fill="url(#paint1_linear)" d="M720 154l-.3-.6-.1-.3-.7.3-1.4.4-1 .3-.8.2v.2l1.1-.2.1 1.2h3.8l-.6-1.4zm203 323.2c-4.6-6.3-14-74.3-14-74.3s-18.5-48.3-13.4-67.6c5-19.2-13.8-68.6-13.8-68.6s-12.4-5.4-13-13.4c0 0-50.7-16-53-28-2-9.8-33.4-16.9-44.6-19a416.3 416.3 0 00-11.4-39.6c-4.3-11-17.7-12-27.3-11.1-.4-1.9-1.2-3.7-2.3-5.2-.2-.6-.5-1-1-1.4l-.6-.5-.7-.9a4.8 4.8 0 00-1.6-1l-1.8-.4-2.1-.3c1.7-.8 3.3-2 4.6-3.4a9.6 9.6 0 002.3-6.7l-1 1.3c.5-4.5-1.8-9-3.2-13.4-1.6-5.7-1.9-11.8-.9-17.6 1.4-8.9 4.7-17.9 7-26.9v-.1a60.4 60.4 0 00-3.7-40.8c-3.4-7.6-8.5-15-16.1-18-5.8-2.4-12.2-2-18.3-2.4-13.9-.8-27-5.7-40.2-10.1A109.3 109.3 0 00612.4 0c-13.8.8-28 7.4-34.3 19.7-2 3.8-3.2 8-5.6 11.6-4.5 6.8-12.5 10.2-19.2 14.9a38 38 0 00-15 19.2 25.6 25.6 0 00.3 16 20.6 20.6 0 009.3 11 29 29 0 007.3 2.8l-.3 1a41.8 41.8 0 00-1.3 5.5 81.7 81.7 0 00-1.4 25.6 83.4 83.4 0 0083.2 74.7h2a107 107 0 013.6 5.2l-1.5-1.5-1.4-1.3-1.4 1.5-2.8-.8a37 37 0 00-18.8 1.3c-7.7 2.2-17 7-28 15.9l-53.3 32-28.8 17.5-10.4 25.4s-7.8 30.2-16.5 64.8l-1 .3-2.1-.1a19.5 19.5 0 00-19.6 18.7c-17.2 21-18.2 42-14.1 51.6.3 1 .8 1.8 1.3 2.6 2.7 3.9 7.7 13.8 12.7 24.3a29.4 29.4 0 00-.3 2.7s3 45.3-7 58.3c-2.1 2.8-1.8 6.5 0 10.7 6.8 14.8 33.2 34.6 33.2 34.6s31.8-.2 49.5-2.1l-.1 5.3c-.4 17.4-.4 32-.4 32l-.7 18.4s-6 38.6-9 49.3c-1.9 6.7.3 68.5 2.2 114h313c3.7-26.9-1.5-108.6-1.5-108.6s-5-21.2-5-39.6a.1.1 0 010-.1v-4.7l2.2-.1 4.1-.1h.4s0-.4.3-1c.6-1.6 1.3-3 2.2-4.4 1.8-2.6 4.5-5.1 8.6-5.3a23.2 23.2 0 009.8-4.6c10.6-7.2 24.6-20.5 28-22.6 4.7-3 27.2-23 27.2-23l7-9.4v-.2c4.5-6.4 9.2-14 8-16.4-2-4.4 1.4-14.7 1.4-14.7 10.4-19-.6-44.4-5.3-50.7zM729.8 169.6l.2 1-.8-1-.2-.4-.2-.2.4-.5c.3.4.5.7.6 1.1zm-3.4-8.8l-2.5.5-2-3.8c1.6 1 3.1 2 4.5 3.3zm-1.8 1.5l1.2.8 1 .8-.7 1a47.7 47.7 0 01-1.5-2.6zm-6-12.3c1.9-.2 3.8-.2 5.8 0h.7l1.6.5c1.2 1.7 2 3.6 2.1 5.6h-.5l-.6.2-2.7.5-1 .2a35 35 0 00-2.2.5 19 19 0 00-.4-.8l-.6-1.3-.7-1.3-.3-.7-.2-.3-.1-.3-1.7-3.7-.2-.4h.8v.2l.2 1.1zM479.9 770.3c-.1-14.8-1.2-31-4.2-46a1579.6 1579.6 0 00-5-24l-3 .5h-.3c-8.4-39.7-17.2-74.6-17.2-74.6s-17.4-66.6-15.4-71.9c.3-.6 0-2.5-.8-5.2a915.7 915.7 0 00-28-71.2v-.1l-2-4.5 1.4-21.3.1-1.3.2-2.7v-1.3s-15.2-12.5-41-21.5l-3.1-1a348.7 348.7 0 015.9-30.7l.7-2.7 1.2-4.4 4.1-1.4.5-.2a73.8 73.8 0 0029-117c3-6.5 6.4-12.8 6.7-19.2v-2.4c-.4-4.2-2.2-8.3-6.5-12.7a43 43 0 00-23.8-11.2c-8.8-1.6-17.8-1.6-26.6-2.7-14.7-1.8-29-6.3-43.7-7.7-18.1-1.6-36.3 1.5-52.9 9-10.9 5-22 13.8-22.6 25.8-.5 9.9 6.3 19.4 4.6 29.2-1.7 9.6-11.5 17.2-10.7 26.9.4 3.8 2.3 7.2 4.8 10.2l2.6 3c3.6 3.8 7.5 7.4 9.5 12.1l.2.6c1.7 4.7 1 10.7-3.2 13.4l.2.3v-.1a11 11 0 005.7 3.6l.8.2-2 2.4-.4.5a41.7 41.7 0 00-7.3 16c-1.1 6.7.4 13.6-1.2 20-2 8-8.4 14.2-12 21.6-6.7 14-2.9 30.5-1.5 46 1.9 21-1.1 42-4.1 62.9l-4.8 33.3-12 83.7c-1.5 10.2-3.2 21-10 28.9a21 21 0 006.4 1.7c9 .9 18.4-3.4 26.4-8.1 6.3-3.7 12.3-7.9 17.9-12.6a1752.3 1752.3 0 00-2.7 9.9c-11.3 43-29.4 121.8-29.4 121.8s-1.7 3.4-3.8 8.5h282l-8.8-10.9-1-1.4zM271 372.7l.1-.3v2.2l-.1 1.2 1 .5 1.1.4a299.6 299.6 0 0023 8l.2 1.3.5 3.8v.1l1.3 10.7s-18.4-7-18.1 3.6V405.5c.1 8.3 2.7 13.2 3.2 15.7l-.1.3c-.5 1-.6 2-.5 3 0 1.9.2 3.7.5 5.4l-1.6 1-1.2.8c-2.5-8.5-5.7-16.7-9.6-24.7-2.8-5.6-5.8-11.5-5.8-17.8V388a21 21 0 011.8-7.2l2.2-4.4 1.6-2.8.5-.8zm449-218.6l-.4-.7-.1-.3-.7.3-1.4.4-1 .3-.8.2v.2l1.1-.2.1 1.2h3.8l-.6-1.4z"/><path fill="#E8F5FF" d="M501.6 301l-6 2.6s-39.2 152-39.2 164.2c0 12.3 83 80.6 83 80.6l13-87.3s-18.7-200.3-50.8-160.2z"/><path fill="#FFC1C7" d="M683.5 252.6l-34.7-18c-2-8.3-5.4-16.2-10.1-23.2a51.6 51.6 0 00-20.3-18.3c-21.2-9.5 89.9-59.5 89.9-59.5 1.7 6 3.8 12 6.1 17.7 5.7 14.2 15.2 32.4 27.5 37.6 20.8 8.9-58.4 63.7-58.4 63.7z"/><path fill="#000" d="M714.4 151.3a82.8 82.8 0 01-75.7 60 51.6 51.6 0 00-20.3-18.2c-21.2-9.5 89.9-59.5 89.9-59.5 1.7 6 3.8 12 6.1 17.7z" opacity=".1"/><path fill="#FFC1C7" d="M717.5 126.1a82.7 82.7 0 11-165.4 0 82.7 82.7 0 01165.4 0z"/><path fill="#575A89" d="M729.5 242l-22.6 52.6-19.9 35h-63.7l-18.6-47.8 7.6-49.5h48.6l31.4-1.8L703 227l6.9 3.8 19.7 11.2z"/><path fill="#000" d="M721.7 171.8s14 3 1.5 13.4c-12.6 10.3-56 43.1-56 43.1s15.2 13.6 12 29.6l50.6-28.2 9-45.1s1-13.6-17-12.8z" opacity=".1"/><path fill="#000" d="M677 228.3l-32.1 5.3s6.6 24.6 3.3 31.6l-.3.6-13 35.5 9.8 27.9 34-46.4-11.6-17.6s12.3-16.3 19.6-22c7.3-5.6-9.6-14.9-9.6-14.9z" opacity=".1"/><path fill="#DCE6F2" d="M677 227l-32.1 5.3s6.6 24.5 3.3 31.5l-.3.7-13 35.4 9.8 28 34-46.6-11.6-17.5s12.3-16.3 19.6-22c7.3-5.6-9.6-14.8-9.6-14.8z"/><path fill="#575A89" d="M723 169.2s14.1 3 1.5 13.3-57.4 45.8-57.4 45.8 16.6 11 13.4 27l50.6-28.3 9-45.1s1-13.6-17-12.7z"/><path fill="#000" d="M640.9 214.5s3 5.8 16.6 16.1c0 0-22.6 12-14 28.9l-34.5-9-5.3-16.6 37.2-19.4z" opacity=".1"/><path fill="#575A89" d="M639.5 213.2s3.1 5.7 16.7 16c0 0-22.6 12-14 29l-34.5-9-5.3-16.6 37.1-19.4z"/><path fill="#000" d="M729.5 242l-22.6 52.6-19.8 35h-63.8l-18.6-47.8 7.6-49.5h13.5c-.2 11.5 4 25.1 3.7 30.2-.4 8.3 12.4 53 12.4 53s26.9-43.4 37.5-47.3c6.6-2.4 20.8-22.6 30.4-37.4l19.7 11.2z" opacity=".1"/><path fill="#E8F5FF" d="M818.4 519L816 522s16.5 83.3 12 102.2c-.8 3.4-1.3 6.9-1.4 10.4v.1c-.8 19.2 5 44.2 5 44.2s4.7 73.6 2 103.9H523.1c-1.8-44.8-3.8-102.8-2-109.2 3-10.6 9-49.1 9-49.1l.7-18.2s0-17.7.5-37.3c.2-8.8.6-18.1 1-26.3a139 139 0 012.8-23.4c.7-3.2 1.2-6.5 1.3-9.8v-1l.2-3.2v-1c.2-6.4 0-14-.1-22V481l-.7-17.8c-.9-18-2-33.2-2-33.2l-38.2-126.4 10.3-25.3 28.5-17.5 52.8-31.8c25.7-21.2 42.7-18.6 49.1-16.3a17 17 0 013 1.3c-1.8.9-3.3 2.2-4.5 3.7a16.3 16.3 0 00-2.8 6 28 28 0 00-.9 8.6c0 3.3.4 6.6.9 9.9v.2a156.7 156.7 0 001.1 6.9c.5 2.5 1 4.8 1.2 6.8l.2 1c.2 1.3.3 2.7.3 4 .1 3.3.6 6.5 1.3 9.6l.9 4.2 1.5 6.4.9 3.8.4 1.5.2.8a940.7 940.7 0 007.2 26.8s15-24.4 27-38.2l.6-.6c1.2-1.4 2.3-2.6 3.5-3.7a20.6 20.6 0 017.5-5.3c4.9-2.8 12.8-13 20.3-23.6l2.1-3a367.4 367.4 0 008.1-12.2c5-7.8 8.5-13.6 8.5-13.6l7-.3h2l31.5-1.5a132.3 132.3 0 004 .7c11.1 2.3 42.2 9.3 44.1 19 2.3 12 52.4 28 52.4 28 .7 8 13 13.2 13 13.2s18.5 49 13.6 68.3c-5 19 12.7 66 13.2 67.3l-3.4 4.3L818.3 519z"/><path fill="#000" d="M721.7 168.3s30.7-8.7 37.6 9.3c7 17.9 22.6 90.2 22.6 90.2s-40.5 7.6-51 0c-6.3-4.5-14-6.6-21.7-5.7l-22.9 15.6-6.7-2s36.6-54.4 44.6-72.9c8-18.5 10.6-26.8-2.5-34.5z" opacity=".1"/><path fill="#E8F5FF" d="M720.4 164.3s30.7-8.7 37.7 9.3c7 17.9 22.5 90.2 22.5 90.2s-40.5 7.6-51 0c-6.3-4.5-14-6.6-21.6-5.7l-23 15.6-6.7-2s36.6-54.4 44.6-72.9c8-18.5 10.6-26.8-2.5-34.5z"/><path fill="#000" d="M514.5 452.9s22.9 5.6 27.2 18.6c4.3 13-17 13.2-17 13.2S511.9 462 514.6 453zM599.8 548.4s-56.1 114.8-43.2 125.8c13 11 43.2-125.8 43.2-125.8zM677 463.8S722 575.3 713 592.6c-9 17.2 19.2 0 19.2 0l-55-128.8z" opacity=".1"/><path fill="#FFC1C7" d="M739.4 574s-151.3 7.3-107.1 54.4c44.1 47.1 134.7 2 134.7 2L739.4 574z"/><path fill="#000" d="M717.5 126.1c0 10.9-2 21.6-6.2 31.6l-4.1.4c-2-4.4-1-9.5-1-14.3.1-4.9-1.7-10.6-6.3-11.9-9.3-2.6-15.7 14.8-24.8 11.6-7-2.3-5.2-13-9.2-19-3.2-5-9.6-6.3-14.6-9.3-10.6-6.5-10.2-17-15.1-26.7-5.2-10.3-16-7.3-25.5-1.2-7.1 4.6-13.3 10.8-21 14.5a52 52 0 01-21.4 4.5c-4.5.2-9-.3-13.4-1.4A82.7 82.7 0 01717.5 126z" opacity=".1"/><path fill="#99607E" d="M610.8 84.6c-7.2 4.7-13.4 10.8-21 14.5-6.7 3.2-14.1 4.4-21.5 4.6-9 .1-18.7-1.4-24.8-8a24 24 0 01-4.6-23 37.5 37.5 0 0114.8-19.2c6.8-4.7 14.6-8 19-14.7 2.4-3.6 3.5-7.8 5.5-11.6 6.3-12.2 20.3-18.8 34-19.6 13.6-.9 27.1 3.2 40.1 7.6 13 4.4 26 9.2 39.8 10.1 6 .4 12.4 0 18 2.4 7.7 3 12.7 10.4 16 18a60.2 60.2 0 015.8 27c-.8 19.7-13.9 39.1-8.1 58 1.5 5.1 4.4 10.3 2.8 15.3-2.2 7.4-11.7 9-19.4 9.4-2-4.3-1-9.4-.9-14.3 0-4.8-1.7-10.5-6.4-11.8-9.2-2.6-15.6 14.8-24.8 11.6-7-2.4-5.1-13-9.1-19.1-3.2-4.9-9.6-6.2-14.6-9.3-10.6-6.5-10.3-16.8-15.2-26.7-5.1-10.3-16-7.3-25.5-1.2z"/><path fill="#E8F5FF" d="M464 465.2l-7.6 2.6s3 45.1-7 58c-10 13 32.9 45.2 32.9 45.2s58.7-.3 60.3-5c1.7-4.7-3-83.6-3-83.6s-31.5-12.3-28.8-31.9c0 0-9.6 46.1-23.9 44.2-14.3-2-30.4-14-22.8-29.5z"/><path fill="#000" d="M489.5 508.6c11.1 0 20.1-8.2 20.1-18.4s-9-18.4-20-18.4c-11.2 0-20.2 8.2-20.2 18.4s9 18.4 20.1 18.4z" opacity=".1"/><path fill="#FFC1C7" d="M511.5 466.5s-4-122-38.8-94.9c-34.8 27.2-35.2 59.7-28.5 69.3 6.6 9.7 27.9 57.8 27.9 57.8a24.3 24.3 0 0036-16l3.4-16.2z"/><path fill="#000" d="M728.7 157.3a3 3 0 00-.9-1.4c-1.7-1.6-5.4-2.1-11-1.7l.3 2.7c7.4-.7 8.9.8 9 1v.3l.3.4a11.1 11.1 0 012 8.8c-1.6 8.1-11.6 14.6-11.8 14.7l-.2.1-.1.2c-4.4 6.4-28.8 24.5-35.2 29.2l-.5-.6c-2.9 2.4-28 24.5-29.4 32.9-.9 5.3-6.8 7.3-9 7.9a56.5 56.5 0 01-13.5-14.2c-3.6-6.2 10.9-18.3 12.2-23l-2-2.1c-.2.7-18.9 18.2-13.7 27a59.4 59.4 0 0014.4 15.4c-.8 7.7-6.1 53-14.3 63.8-10 13.3-18.5 80.6-17.6 104 .8 21-4.6 60.4-22.8 77.3a29.2 29.2 0 01-24.1 8h-.4c-.3 0-26.7 2.7-48.9-16-18.1-15.3-28.4-40.2-30.6-74h-.4l-.2-10a19.2 19.2 0 10-2.8.3h.2l.2 9.8h-1c2.3 35 13 61 32 77a74 74 0 0051.7 16.8 32.8 32.8 0 0027-9c19.2-17.9 25-58.7 24-80.3-1-25 8-89.8 17-101.6 8.7-11.6 14-56.7 15-65.5 3.1-.9 10.3-3.7 11.5-11 .9-5.3 17.7-21.5 28-30.5l-.3-.4c5.5-4 22.8-16.9 31.4-25 2.7-2.6 5.3-5.2 8-7.6 3.4-3 7.6-7.6 8.7-13.1a13.7 13.7 0 00-2.2-10.6z" opacity=".1"/><path fill="#353146" d="M639.3 254.2c-.4-.3-10.4-7.4-15.4-16-5.2-8.9 13.5-26.3 13.7-27l2 2c-1.3 4.7-15.8 16.8-12.2 23a58.1 58.1 0 0014.2 14.8l-2.3 3.2z"/><path fill="#E8F5FF" d="M679.8 213.6l-1.5-2.2c.3-.2 31.7-23 36.6-30.3l.2-.2.2-.2c.1 0 10.1-6.5 11.8-14.7a11 11 0 00-2-8.8l-.3-.3v-.3c-.2-.2-1.6-1.7-9-1l-.3-2.7c5.6-.5 9.3 0 11 1.7.4.3.7.8 1 1.3a13.7 13.7 0 012.2 10.7 25.7 25.7 0 01-8.7 13l-8 7.6c-10 9.6-32 25.6-33.2 26.4zM479 404.6h-2.6l.3 16.1h2.6l-.3-16.1z"/><path fill="#10316C" d="M476.2 407a19.3 19.3 0 100-38.7 19.3 19.3 0 000 38.7z"/><path fill="#E8F5FF" d="M476.2 403.7a16 16 0 100-32.1 16 16 0 000 32.1z"/><path fill="#353146" d="M563.3 510.8c-1.3 0-2.6 0-4-.2a74.1 74.1 0 01-51.6-16.9c-19-16-29.8-41.8-32-76.8l4-.3c2.2 33.9 12.4 58.8 30.6 74 22.2 18.7 48.6 16 48.8 16h.5a29.2 29.2 0 0024-8c18.2-16.8 23.7-56.3 22.9-77.1-1-23.5 7.5-90.8 17.6-104.2 8.8-11.7 14.3-64.3 14.4-64.9l.1-1.5 1.5-.2s8.7-1.7 9.8-8.1c1.4-8.4 26.5-30.5 29.4-33l2.6 3c-10.4 9-27.2 25.3-28 30.6-1.3 7.3-8.4 10.1-11.6 11-1 8.8-6.3 54-15 65.5-9 11.8-17.8 76.7-16.8 101.6.8 21.6-5 62.4-24.1 80.3-6.2 6-14.5 9.3-23 9.2z"/><g fill="#000" opacity=".1"><path d="M726 102.5c1.7-6 3.7-12.2 5-18.3-1.6 6.1-3.6 12.2-5 18.3zM709.3 150c-2-4.3-.9-9.4-.9-14.2 0-4.8-1.7-10.5-6.3-11.8-9.3-2.6-15.7 14.7-24.8 11.6-7-2.4-5.2-13-9.2-19.1-3.2-5-9.6-6.3-14.6-9.3-10.5-6.5-10.2-16.9-15.1-26.7-5.2-10.3-16-7.3-25.5-1.2-7.1 4.6-13.3 10.8-21 14.5-6.6 3.2-14 4.4-21.4 4.5-9 .3-18.7-1.3-24.8-7.8-4.8-5-6.5-12.4-5.5-19.2l-.5 1.4a24 24 0 004.6 23c6.2 6.6 16 8.1 24.9 8 7.3-.2 14.8-1.4 21.4-4.6 7.7-3.7 13.9-9.8 21-14.5 9.4-6 20.3-9 25.4 1.2 5 9.8 4.6 20.2 15.2 26.7 5 3 11.4 4.4 14.6 9.3 4 6.1 2.2 16.7 9.2 19 9 3.2 15.5-14 24.7-11.5 4.7 1.3 6.5 7 6.4 11.8 0 4.8-1 10 1 14.3 7.6-.3 17.1-2 19.3-9.4.3-1 .5-2.2.5-3.3-3.3 5.6-11.6 7-18.6 7.4z" opacity=".1"/></g><path fill="#000" d="M890 396.5l11.7 12.3s9.3 67.6 13.9 74c4.6 6.3 15.6 31.5 5.3 50.4 0 0-3.3 10.3-1.3 14.6 2 4.3-15 25.9-15 25.9s-22.2 19.9-26.8 22.9c-4.7 3-29.2 26.8-37.5 27.2-8.3.3-11 10.6-11 10.6l-46.8 1.6s-25.8-1.3-31.4 2.3c0 0 3-39.4-26-65.3l37-13.3s13.9-6 18.2-12.3c2.7-3.8 6.5-6.7 11-8.3 0 0 10.2-7.3 10.6-11.2.3-4 12.5-8.9 12.5-8.9l-6.9-59.1 3.7-98.2s11.6-82.3 36.1-77.7c24.6 4.7 42.8 112.5 42.8 112.5z" opacity=".1"/><path fill="#E8F5FF" d="M894 396.5l11.7 12.3s9.3 67.6 13.9 74c4.6 6.3 15.6 31.5 5.3 50.4 0 0-3.3 10.3-1.3 14.6 2 4.3-15 25.9-15 25.9s-22.2 19.9-26.8 22.9c-4.7 3-29.2 26.8-37.5 27.2-8.3.3-11 10.6-11 10.6l-46.8 1.6s-25.8-1.3-31.4 2.3c0 0 3-39.4-26-65.3l37-13.3s13.9-6 18.2-12.3c2.7-3.8 6.5-6.7 11-8.3 0 0 10.2-7.3 10.6-11.2.3-4 12.5-8.9 12.5-8.9l-6.9-59.1 3.7-98.2s11.6-82.3 36.1-77.7c24.6 4.7 42.8 112.5 42.8 112.5z"/><path fill="#000" d="M850.9 495.7s34.2-9 43.1 2c9 11-43.1-2-43.1-2zM843 510.8c11.5 8.1 47.4 8.4 47.4 8.4l-47.5-8.4zM860.5 551.4c1 .4 24.6 25.6 34.6 18 9.9-7.7-34.6-18-34.6-18zM542.3 339.8s7 47.7 3.5 67.2c-3.4 19.5 9 43.6 9 43.6l-12.5-110.8z" opacity=".1"/><path fill="#FFCCD0" d="M388.6 359.2c-8 6.3-13.8 21.1-18 37.4-7.4 28.5-9.8 61.4-9.8 61.4s-63.7-14.6-59-21.2c2.8-4.2-1-35.6-4.4-58.4-1.9-13.4-3.6-23.9-3.6-23.9s116.7-12.6 94.8 4.7z"/><path fill="#000" d="M388.6 357.9c-8 6.2-13.8 21-18 37.4a73.5 73.5 0 01-73.2-18.2c-1.9-13.4-3.6-23.9-3.6-23.9s116.7-12.6 94.8 4.7z" opacity=".1"/><path fill="#FFCCD0" d="M422.9 322.1a73.7 73.7 0 11-147.4 0 73.7 73.7 0 01147.4 0z"/><path fill="#000" d="M481 782.7h-21l-1.8-37.1-1.9-38.4 12.4-1.8 3-.4h.3l5 23.8c2.5 14.2 4 28.6 4 43v10.9zM301 407.8s-18.1-7-17.9 3.6c.2 10.6 4.4 15.7 3.1 17.2-1.3 1.6.7 10.9.7 10.9s24.5 0 35.8 5c11.3 5.1 52.9 15.3 58.2 18.4 5.3 3.1 25 17 25 17l1.7-26.3s-20.3-16.8-53.7-25.4c-33.4-8.7-52.8-20.4-52.8-20.4z" opacity=".1"/><path fill="#FF748E" d="M301 406.4s-18.1-7-17.9 3.7c.2 10.6 4.4 15.6 3.1 17.2-1.3 1.6.7 10.8.7 10.8s24.5 0 35.8 5.1c11.3 5.1 52.9 15.3 58.2 18.4 5.3 3 25 17 25 17l1.8-26.3s-20.4-16.8-53.8-25.4c-33.4-8.6-52.8-20.5-52.8-20.5z"/><path fill="#000" d="M356 469.8s34.6 37.6 32.9 48c-1.8 10.4-33-48-33-48zM299.5 605.6s-25.4 23.4-33 24.7c-7.4 1.4 5.8 5.8 14.4 2.3 8.7-3.6 27-12.9 27-12.9l-8.4-14.1z" opacity=".1"/><path fill="#FFCCD0" d="M487.3 782.7h-59.4a823.7 823.7 0 00-21.1-17.9 69 69 0 01-19.6-28.3c-1.1-2.5-2-5.1-3-7.7l44-26.1c2.5 2 4.7 4.3 6.9 6.6l.5.7c2.4 2.8 4.6 6.1 4.8 8.8.2 3.1 8.9 15.2 17.7 26.8 9 11.8 18.3 23 18.9 23.8a252.4 252.4 0 0010.3 13.3z"/><path fill="#FFE0D0" d="M401 288.3c-.7 15.3.6 49.6-16.4 57.2-8.4 3.8-17.4-4.5-26.6-4.7-6.6-.1-12.6 4-16.7 9.3-4 5.3-6.5 11.5-9.5 17.4-2.6 5.4-5.7 10.6-9.2 15.5-2 3-4.3 5.9-7.5 7.5-5.5 3-12.2 1.3-18.1-.6a297 297 0 01-22.7-8.1l.3-3.4-.8 1.2-.4.8a90.2 90.2 0 00-3.3 6.4 23 23 0 00-1.9 7.1c-.5 6.7 2.8 13 5.8 19 11.2 23.2 18.1 50.4 9.7 74.7-3.7 10.6-10 20-14.7 30.3a97.7 97.7 0 00-6.8 57.7c2.3 12.1 7 24.1 5.8 36.4-2 21.2-20.2 37-38.5 47.8-9.9 5.8-22 11-32.4 6.4 6.7-7.9 8.4-18.6 9.8-28.8a146337.2 146337.2 0 0116.6-116.5c3-20.8 6-41.8 4-62.7-1.3-15.4-5-31.8 1.6-45.8 3.6-7.3 9.8-13.5 11.8-21.4 1.6-6.5.1-13.4 1.2-20a42.5 42.5 0 019.6-18.9c-2.7-.7-5.2-1.8-6.7-4 4.3-2.8 5-9.1 3-13.9-2-4.7-5.8-8.3-9.4-12-3.5-3.8-6.8-8.2-7.3-13.3-.8-9.7 8.9-17.2 10.6-26.8 1.7-9.7-5.1-19.2-4.6-29 .6-12 11.6-20.7 22.4-25.7a102 102 0 0152.3-9c14.6 1.4 28.7 5.9 43.2 7.6 8.8 1 17.7 1.1 26.4 2.7a42.4 42.4 0 0123.6 11.2c16.1 16.8-3.2 30.7-4.1 48.4z"/><path fill="#000" d="M387.5 741.3c-5-2.2-14.3-.8-30.3-5.7-15.9-4.9-19-26.8-19-26.8-.2-.5-1.6-3.8-11.7-15.2-11-12.6-35-76.3-35-76.3S270.3 594.5 271 586c.7-8.4-3.8-30.8-3.3-55.8.4-25 47.7-41.5 47.7-41.5 91.2-16.2 69.7 88.9 67.3 96.8-2.5 8 10.2 29.5 10.2 29.5-1.8 9.4 7.3 23.8 7.3 23.8a369.7 369.7 0 002.8 18.4c1.4 4.6 13.3 8.7 18.1 11.3 5.1 2.6 21.5 25.9 21.5 25.9 3.5 17-50 49-55 46.8z" opacity=".1"/><path fill="#000" d="M319.9 539.7s39.8 42 50.2 42c10.3 0-50.2-42-50.2-42z" opacity=".1"/><path fill="#FF748E" d="M390.2 737.3c-5.1-2.2-14.4-.8-30.3-5.7-16-4.9-19-26.8-19-26.8 10.5-7 37.3-26.8 47.8-34 7.4-5.1 13.4-12.6 17-17.5 1.4 4.6 13.4 8.8 18.2 11.3 5 2.6 21.5 25.9 21.5 25.9 3.4 17-50.1 49.1-55.2 46.8z"/><path fill="#000" d="M273.4 380.4a90.2 90.2 0 00-3.3 6.4c-5.2-5.3-18-17.9-25-21.8 1.6-3.7 3.9-7.1 6.6-10.2 0 0 17 9 21.7 25.6z" opacity=".1"/><path fill="#FF748E" d="M273.9 379.6c-4-17.8-22.2-27.4-22.2-27.4-2.7 3-5 6.5-6.7 10.2 7.5 4.1 21.4 17.9 26 22.6l2.9-5.4z"/></g><defs><linearGradient id="paint0_linear" x1="730" x2="730" y1="95.4" y2="77" gradientUnits="userSpaceOnUse"><stop stop-color="gray" stop-opacity=".3"/><stop offset=".5" stop-color="gray" stop-opacity=".1"/><stop offset="1" stop-color="gray" stop-opacity=".1"/></linearGradient><linearGradient id="paint1_linear" x1="458772" x2="458772" y1="658504" y2="45912.3" gradientUnits="userSpaceOnUse"><stop stop-color="#616161" stop-opacity=".3"/><stop offset="0" stop-color="#B9B9B9" stop-opacity=".3"/><stop offset=".5" stop-color="gray" stop-opacity=".6"/><stop offset="1" stop-color="#6A6A6A" stop-opacity=".9"/><stop offset="1" stop-color="#B1B1B1" stop-opacity=".9"/></linearGradient><clipPath id="clip0"><path fill="#fff" d="M0 0h1086.1v782.7H0z"/></clipPath></defs></svg>
    <div className="header-box">
      <div className="opening-hours">
        <h3>Ordinační hodiny</h3>
        <Table responsive>
          <tbody>
            <tr>
              <td>Pondělí</td>
              <td>7.00 - 12.00</td>
              <td>13.00 - 15.00</td>
            </tr>
            <tr>
              <td>Úterý</td>
              <td>7.00 - 12.00</td>
              <td></td>
            </tr>
            <tr>
              <td>Středa</td>
              <td>7.00 - 12.00</td>
              <td>13.00 - 15.00</td>
            </tr>
            <tr>
              <td>Čtvrtek</td>
              <td>7.00 - 12.00</td>
              <td>14.00 - 15.30 a dále dle tel. objednání do 18.00</td>
            </tr>
            <tr>
              <td>Pátek</td>
              <td>7.00 - 12.00</td>
              <td>13.00 - 14.00 pouze objednaní</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="contact">
        
        <h3>Kontaktní informace</h3>
        <a href="tel:+420 415 783 180"><i className="fa fa-phone" aria-hidden="true"></i> +420 415 783 180</a>
        <a href="mailto:murban@mediclub.cz"><i className="fa fa-envelope" aria-hidden="true"></i> murban@mediclub.cz</a>
      </div>
    </div>
  </header>
)

export default Header
