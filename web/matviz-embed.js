"use strict";(()=>{var ll="170",pi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},mi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bu=0,Xl=1,Mu=2;var ih=1,Eu=2,Mn=3,kn=0,De=1,Le=2,Hn=0,Oi=1,ql=2,Yl=3,Zl=4,Su=5,si=100,wu=101,Tu=102,Au=103,Ru=104,Cu=200,Pu=201,Iu=202,Lu=203,Wo=204,Xo=205,Du=206,Uu=207,Fu=208,Nu=209,Ou=210,Bu=211,zu=212,Hu=213,Vu=214,qo=0,Yo=1,Zo=2,ki=3,$o=4,jo=5,Ko=6,Jo=7,cl=0,ku=1,Gu=2,Vn=0,Wu=1,Xu=2,qu=3,Yu=4,Zu=5,$u=6,ju=7;var sh=300,Gi=301,Wi=302,Qo=303,ta=304,Hr=306,ea=1e3,oi=1001,na=1002,ke=1003,Ku=1004;var Os=1005;var He=1006,uo=1007;var hn=1008;var nn=1009,rh=1010,oh=1011,Ms=1012,hl=1013,ai=1014,un=1015,Ps=1016,ul=1017,dl=1018,Xi=1020,ah=35902,lh=1021,ch=1022,Ve=1023,hh=1024,uh=1025,Bi=1026,qi=1027,fl=1028,pl=1029,dh=1030,ml=1031;var gl=1033,mr=33776,gr=33777,xr=33778,_r=33779,ia=35840,sa=35841,ra=35842,oa=35843,aa=36196,la=37492,ca=37496,ha=37808,ua=37809,da=37810,fa=37811,pa=37812,ma=37813,ga=37814,xa=37815,_a=37816,ya=37817,va=37818,ba=37819,Ma=37820,Ea=37821,yr=36492,Sa=36494,wa=36495,fh=36283,Ta=36284,Aa=36285,Ra=36286;var vr=2300,Ca=2301,fo=2302,$l=2400,jl=2401,Kl=2402;var Ju=3200,Qu=3201;var ph=0,td=1,zn="",Xe="srgb",Qi="srgb-linear",Vr="linear",te="srgb";var xi=7680;var Jl=519,ed=512,nd=513,id=514,mh=515,sd=516,rd=517,od=518,ad=519,Pa=35044;var Tn="300 es",En=2e3,br=2001,An=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ql=1234567,zi=Math.PI/180,Es=180/Math.PI;function Sn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function Ee(i,t,e){return Math.max(t,Math.min(e,i))}function xl(i,t){return(i%t+t)%t}function ld(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function cd(i,t,e){return i!==t?(e-i)/(t-i):0}function vs(i,t,e){return(1-e)*i+e*t}function hd(i,t,e,n){return vs(i,t,1-Math.exp(-e*n))}function ud(i,t=1){return t-Math.abs(xl(i,t*2)-t)}function dd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function fd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function pd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function md(i,t){return i+Math.random()*(t-i)}function gd(i){return i*(.5-Math.random())}function xd(i){i!==void 0&&(Ql=i);let t=Ql+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _d(i){return i*zi}function yd(i){return i*Es}function vd(i){return(i&i-1)===0&&i!==0}function bd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Md(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ed(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function tn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Jt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var gh={DEG2RAD:zi,RAD2DEG:Es,generateUUID:Sn,clamp:Ee,euclideanModulo:xl,mapLinear:ld,inverseLerp:cd,lerp:vs,damp:hd,pingpong:ud,smoothstep:dd,smootherstep:fd,randInt:pd,randFloat:md,randFloatSpread:gd,seededRandom:xd,degToRad:_d,radToDeg:yd,isPowerOfTwo:vd,ceilPowerOfTwo:bd,floorPowerOfTwo:Md,setQuaternionFromProperEuler:Ed,normalize:Jt,denormalize:tn},At=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Nt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],x=s[0],m=s[3],f=s[6],y=s[1],v=s[4],_=s[7],C=s[2],S=s[5],T=s[8];return r[0]=o*x+a*y+l*C,r[3]=o*m+a*v+l*S,r[6]=o*f+a*_+l*T,r[1]=c*x+h*y+d*C,r[4]=c*m+h*v+d*S,r[7]=c*f+h*_+d*T,r[2]=u*x+p*y+g*C,r[5]=u*m+p*v+g*S,r[8]=u*f+p*_+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,p=c*r-o*l,g=e*d+n*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(po.makeScale(t,e)),this}rotate(t){return this.premultiply(po.makeRotation(-t)),this}translate(t,e){return this.premultiply(po.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},po=new Nt;function xh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sd(){let i=Mr("canvas");return i.style.display="block",i}var tc={};function _s(i){i in tc||(tc[i]=!0,console.warn(i))}function wd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Td(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ad(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Wt={enabled:!0,workingColorSpace:Qi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===te&&(i.r=wn(i.r),i.g=wn(i.g),i.b=wn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===te&&(i.r=Hi(i.r),i.g=Hi(i.g),i.b=Hi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===zn?Vr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ec=[.64,.33,.3,.6,.15,.06],nc=[.2126,.7152,.0722],ic=[.3127,.329],sc=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rc=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Wt.define({[Qi]:{primaries:ec,whitePoint:ic,transfer:Vr,toXYZ:sc,fromXYZ:rc,luminanceCoefficients:nc,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:ec,whitePoint:ic,transfer:te,toXYZ:sc,fromXYZ:rc,luminanceCoefficients:nc,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}});var _i,Ia=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{_i===void 0&&(_i=Mr("canvas")),_i.width=t.width,_i.height=t.height;let n=_i.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=_i}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Mr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=wn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(wn(e[n]/255)*255):e[n]=wn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Rd=0,Er=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=Sn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(mo(s[o].image)):r.push(mo(s[o]))}else r=mo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function mo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ia.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Cd=0,Ue=class i extends An{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=oi,s=oi,r=He,o=hn,a=Ve,l=nn,c=i.DEFAULT_ANISOTROPY,h=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Sn(),this.name="",this.source=new Er(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ea:t.x=t.x-Math.floor(t.x);break;case oi:t.x=t.x<0?0:1;break;case na:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ea:t.y=t.y-Math.floor(t.y);break;case oi:t.y=t.y<0?0:1;break;case na:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=sh;Ue.DEFAULT_ANISOTROPY=1;var fe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,_=(p+1)/2,C=(f+1)/2,S=(h+u)/4,T=(d+x)/4,I=(g+m)/4;return v>_&&v>C?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=S/n,r=T/n):_>C?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=S/s,r=I/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=T/r,s=I/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-x)/y,this.z=(u-h)/y,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},La=class extends An{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:He,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ue(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Er(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},sn=class extends La{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Sr=class extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Da=class extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xe=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(d!==x||l!==u||c!==p||h!==g){let m=1-a,f=l*u+c*p+h*g+d*x,y=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){let C=Math.sqrt(v),S=Math.atan2(C,f*y);m=Math.sin(m*S)/C,a=Math.sin(a*S)/C}let _=a*y;if(l=l*m+u*_,c=c*m+p*_,h=h*m+g*_,d=d*m+x*_,m===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=C,c*=C,h*=C,d*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*p-c*u,t[e+1]=l*g+h*u+c*d-a*p,t[e+2]=c*g+h*p+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>d){let p=2*Math.sqrt(1+n-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-n-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(oc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(oc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return go.copy(this).projectOnVector(t),this.sub(go)}reflect(t){return this.sub(go.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},go=new A,oc=new xe,rn=class{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ke):Ke.fromBufferAttribute(r,o),Ke.applyMatrix4(t.matrixWorld),this.expandByPoint(Ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Bs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bs.copy(n.boundingBox)),Bs.applyMatrix4(t.matrixWorld),this.union(Bs)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ke),Ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ls),zs.subVectors(this.max,ls),yi.subVectors(t.a,ls),vi.subVectors(t.b,ls),bi.subVectors(t.c,ls),Dn.subVectors(vi,yi),Un.subVectors(bi,vi),Kn.subVectors(yi,bi);let e=[0,-Dn.z,Dn.y,0,-Un.z,Un.y,0,-Kn.z,Kn.y,Dn.z,0,-Dn.x,Un.z,0,-Un.x,Kn.z,0,-Kn.x,-Dn.y,Dn.x,0,-Un.y,Un.x,0,-Kn.y,Kn.x,0];return!xo(e,yi,vi,bi,zs)||(e=[1,0,0,0,1,0,0,0,1],!xo(e,yi,vi,bi,zs))?!1:(Hs.crossVectors(Dn,Un),e=[Hs.x,Hs.y,Hs.z],xo(e,yi,vi,bi,zs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},xn=[new A,new A,new A,new A,new A,new A,new A,new A],Ke=new A,Bs=new rn,yi=new A,vi=new A,bi=new A,Dn=new A,Un=new A,Kn=new A,ls=new A,zs=new A,Hs=new A,Jn=new A;function xo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Jn.fromArray(i,r);let a=s.x*Math.abs(Jn.x)+s.y*Math.abs(Jn.y)+s.z*Math.abs(Jn.z),l=t.dot(Jn),c=e.dot(Jn),h=n.dot(Jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Pd=new rn,cs=new A,_o=new A,Gn=class{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Pd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cs.subVectors(t,this.center);let e=cs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(cs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_o.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cs.copy(t.center).add(_o)),this.expandByPoint(cs.copy(t.center).sub(_o))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},_n=new A,yo=new A,Vs=new A,Fn=new A,vo=new A,ks=new A,bo=new A,li=class{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=_n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_n.copy(this.origin).addScaledVector(this.direction,e),_n.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){yo.copy(t).add(e).multiplyScalar(.5),Vs.copy(e).sub(t).normalize(),Fn.copy(this.origin).sub(yo);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Vs),a=Fn.dot(this.direction),l=-Fn.dot(Vs),c=Fn.lengthSq(),h=Math.abs(1-o*o),d,u,p,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let x=1/h;d*=x,u*=x,p=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(yo).addScaledVector(Vs,u),p}intersectSphere(t,e){_n.subVectors(t.center,this.origin);let n=_n.dot(this.direction),s=_n.dot(_n)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,_n)!==null}intersectTriangle(t,e,n,s,r){vo.subVectors(e,t),ks.subVectors(n,t),bo.crossVectors(vo,ks);let o=this.direction.dot(bo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fn.subVectors(this.origin,t);let l=a*this.direction.dot(ks.crossVectors(Fn,ks));if(l<0)return null;let c=a*this.direction.dot(vo.cross(Fn));if(c<0||l+c>o)return null;let h=-a*Fn.dot(bo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Vt=class i{constructor(t,e,n,s,r,o,a,l,c,h,d,u,p,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,p,g,x,m)}set(t,e,n,s,r,o,a,l,c,h,d,u,p,g,x,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Mi.setFromMatrixColumn(t,0).length(),r=1/Mi.setFromMatrixColumn(t,1).length(),o=1/Mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,p=o*d,g=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,p=l*d,g=c*h,x=c*d;e[0]=u+x*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,p=l*d,g=c*h,x=c*d;e[0]=u-x*a,e[4]=-o*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,p=o*d,g=a*h,x=a*d;e[0]=l*h,e[4]=g*c-p,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,p=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-u*d,e[8]=g*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*d+g,e[10]=u-x*d}else if(t.order==="XZY"){let u=o*l,p=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=o*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Id,t,Ld)}lookAt(t,e,n){let s=this.elements;return Oe.subVectors(t,e),Oe.lengthSq()===0&&(Oe.z=1),Oe.normalize(),Nn.crossVectors(n,Oe),Nn.lengthSq()===0&&(Math.abs(n.z)===1?Oe.x+=1e-4:Oe.z+=1e-4,Oe.normalize(),Nn.crossVectors(n,Oe)),Nn.normalize(),Gs.crossVectors(Oe,Nn),s[0]=Nn.x,s[4]=Gs.x,s[8]=Oe.x,s[1]=Nn.y,s[5]=Gs.y,s[9]=Oe.y,s[2]=Nn.z,s[6]=Gs.z,s[10]=Oe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],x=n[6],m=n[10],f=n[14],y=n[3],v=n[7],_=n[11],C=n[15],S=s[0],T=s[4],I=s[8],M=s[12],b=s[1],P=s[5],L=s[9],D=s[13],B=s[2],W=s[6],H=s[10],Z=s[14],V=s[3],et=s[7],nt=s[11],rt=s[15];return r[0]=o*S+a*b+l*B+c*V,r[4]=o*T+a*P+l*W+c*et,r[8]=o*I+a*L+l*H+c*nt,r[12]=o*M+a*D+l*Z+c*rt,r[1]=h*S+d*b+u*B+p*V,r[5]=h*T+d*P+u*W+p*et,r[9]=h*I+d*L+u*H+p*nt,r[13]=h*M+d*D+u*Z+p*rt,r[2]=g*S+x*b+m*B+f*V,r[6]=g*T+x*P+m*W+f*et,r[10]=g*I+x*L+m*H+f*nt,r[14]=g*M+x*D+m*Z+f*rt,r[3]=y*S+v*b+_*B+C*V,r[7]=y*T+v*P+_*W+C*et,r[11]=y*I+v*L+_*H+C*nt,r[15]=y*M+v*D+_*Z+C*rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15];return g*(+r*l*d-s*c*d-r*a*u+n*c*u+s*a*p-n*l*p)+x*(+e*l*p-e*c*u+r*o*u-s*o*p+s*c*h-r*l*h)+m*(+e*c*d-e*a*p-r*o*d+n*o*p+r*a*h-n*c*h)+f*(-s*a*h-e*l*d+e*a*u+s*o*d-n*o*u+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],y=d*m*c-x*u*c+x*l*p-a*m*p-d*l*f+a*u*f,v=g*u*c-h*m*c-g*l*p+o*m*p+h*l*f-o*u*f,_=h*x*c-g*d*c+g*a*p-o*x*p-h*a*f+o*d*f,C=g*d*l-h*x*l-g*a*u+o*x*u+h*a*m-o*d*m,S=e*y+n*v+s*_+r*C;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/S;return t[0]=y*T,t[1]=(x*u*r-d*m*r-x*s*p+n*m*p+d*s*f-n*u*f)*T,t[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*f+n*l*f)*T,t[3]=(d*l*r-a*u*r-d*s*c+n*u*c+a*s*p-n*l*p)*T,t[4]=v*T,t[5]=(h*m*r-g*u*r+g*s*p-e*m*p-h*s*f+e*u*f)*T,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*f-e*l*f)*T,t[7]=(o*u*r-h*l*r+h*s*c-e*u*c-o*s*p+e*l*p)*T,t[8]=_*T,t[9]=(g*d*r-h*x*r-g*n*p+e*x*p+h*n*f-e*d*f)*T,t[10]=(o*x*r-g*a*r+g*n*c-e*x*c-o*n*f+e*a*f)*T,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*p-e*a*p)*T,t[12]=C*T,t[13]=(h*x*s-g*d*s+g*n*u-e*x*u-h*n*m+e*d*m)*T,t[14]=(g*a*s-o*x*s-g*n*l+e*x*l+o*n*m-e*a*m)*T,t[15]=(o*d*s-h*a*s+h*n*l-e*d*l-o*n*u+e*a*u)*T,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,p=r*h,g=r*d,x=o*h,m=o*d,f=a*d,y=l*c,v=l*h,_=l*d,C=n.x,S=n.y,T=n.z;return s[0]=(1-(x+f))*C,s[1]=(p+_)*C,s[2]=(g-v)*C,s[3]=0,s[4]=(p-_)*S,s[5]=(1-(u+f))*S,s[6]=(m+y)*S,s[7]=0,s[8]=(g+v)*T,s[9]=(m-y)*T,s[10]=(1-(u+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Mi.set(s[0],s[1],s[2]).length(),o=Mi.set(s[4],s[5],s[6]).length(),a=Mi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Je.copy(this);let c=1/r,h=1/o,d=1/a;return Je.elements[0]*=c,Je.elements[1]*=c,Je.elements[2]*=c,Je.elements[4]*=h,Je.elements[5]*=h,Je.elements[6]*=h,Je.elements[8]*=d,Je.elements[9]*=d,Je.elements[10]*=d,e.setFromRotationMatrix(Je),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=En){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s),p,g;if(a===En)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===br)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=En){let l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(o-r),u=(e+t)*c,p=(n+s)*h,g,x;if(a===En)g=(o+r)*d,x=-2*d;else if(a===br)g=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Mi=new A,Je=new Vt,Id=new A(0,0,0),Ld=new A(1,1,1),Nn=new A,Gs=new A,Oe=new A,ac=new Vt,lc=new xe,dn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ac.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ac,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lc.setFromEuler(this),this.setFromQuaternion(lc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};dn.DEFAULT_ORDER="XYZ";var Ss=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Dd=0,cc=new A,Ei=new xe,yn=new Vt,Ws=new A,hs=new A,Ud=new A,Fd=new xe,hc=new A(1,0,0),uc=new A(0,1,0),dc=new A(0,0,1),fc={type:"added"},Nd={type:"removed"},Si={type:"childadded",child:null},Mo={type:"childremoved",child:null},ue=class i extends An{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new A,e=new dn,n=new xe,s=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Vt},normalMatrix:{value:new Nt}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ss,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.premultiply(Ei),this}rotateX(t){return this.rotateOnAxis(hc,t)}rotateY(t){return this.rotateOnAxis(uc,t)}rotateZ(t){return this.rotateOnAxis(dc,t)}translateOnAxis(t,e){return cc.copy(t).applyQuaternion(this.quaternion),this.position.add(cc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hc,t)}translateY(t){return this.translateOnAxis(uc,t)}translateZ(t){return this.translateOnAxis(dc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ws.copy(t):Ws.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(hs,Ws,this.up):yn.lookAt(Ws,hs,this.up),this.quaternion.setFromRotationMatrix(yn),s&&(yn.extractRotation(s.matrixWorld),Ei.setFromRotationMatrix(yn),this.quaternion.premultiply(Ei.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fc),Si.child=t,this.dispatchEvent(Si),Si.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Nd),Mo.child=t,this.dispatchEvent(Mo),Mo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fc),Si.child=t,this.dispatchEvent(Si),Si.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,t,Ud),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,Fd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};ue.DEFAULT_UP=new A(0,1,0);ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qe=new A,vn=new A,Eo=new A,bn=new A,wi=new A,Ti=new A,pc=new A,So=new A,wo=new A,To=new A,Ao=new fe,Ro=new fe,Co=new fe,en=class i{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Qe.subVectors(t,e),s.cross(Qe);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Qe.subVectors(s,e),vn.subVectors(n,e),Eo.subVectors(t,e);let o=Qe.dot(Qe),a=Qe.dot(vn),l=Qe.dot(Eo),c=vn.dot(vn),h=vn.dot(Eo),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bn.x),l.addScaledVector(o,bn.y),l.addScaledVector(a,bn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ao.setScalar(0),Ro.setScalar(0),Co.setScalar(0),Ao.fromBufferAttribute(t,e),Ro.fromBufferAttribute(t,n),Co.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ao,r.x),o.addScaledVector(Ro,r.y),o.addScaledVector(Co,r.z),o}static isFrontFacing(t,e,n,s){return Qe.subVectors(n,e),vn.subVectors(t,e),Qe.cross(vn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qe.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),Qe.cross(vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;wi.subVectors(s,n),Ti.subVectors(r,n),So.subVectors(t,n);let l=wi.dot(So),c=Ti.dot(So);if(l<=0&&c<=0)return e.copy(n);wo.subVectors(t,s);let h=wi.dot(wo),d=Ti.dot(wo);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(wi,o);To.subVectors(t,r);let p=wi.dot(To),g=Ti.dot(To);if(g>=0&&p<=g)return e.copy(r);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ti,a);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return pc.subVectors(r,s),a=(d-h)/(d-h+(p-g)),e.copy(s).addScaledVector(pc,a);let f=1/(m+x+u);return o=x*f,a=u*f,e.copy(n).addScaledVector(wi,o).addScaledVector(Ti,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},_h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},Xs={h:0,s:0,l:0};function Po(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Wt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Wt.workingColorSpace){if(t=xl(t,1),e=Ee(e,0,1),n=Ee(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Po(o,r,t+1/3),this.g=Po(o,r,t),this.b=Po(o,r,t-1/3)}return Wt.toWorkingColorSpace(this,s),this}setStyle(t,e=Xe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){let n=_h[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wn(t.r),this.g=wn(t.g),this.b=wn(t.b),this}copyLinearToSRGB(t){return this.r=Hi(t.r),this.g=Hi(t.g),this.b=Hi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return Wt.fromWorkingColorSpace(Ae.copy(this),t),Math.round(Ee(Ae.r*255,0,255))*65536+Math.round(Ee(Ae.g*255,0,255))*256+Math.round(Ee(Ae.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.fromWorkingColorSpace(Ae.copy(this),e);let n=Ae.r,s=Ae.g,r=Ae.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=Xe){Wt.fromWorkingColorSpace(Ae.copy(this),t);let e=Ae.r,n=Ae.g,s=Ae.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(On),this.setHSL(On.h+t,On.s+e,On.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(On),t.getHSL(Xs);let n=vs(On.h,Xs.h,e),s=vs(On.s,Xs.s,e),r=vs(On.l,Xs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ae=new yt;yt.NAMES=_h;var Od=0,Rn=class extends An{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=Sn(),this.name="",this.blending=Oi,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wo,this.blendDst=Xo,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wo&&(n.blendSrc=this.blendSrc),this.blendDst!==Xo&&(n.blendDst=this.blendDst),this.blendEquation!==si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ki&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Wn=class extends Rn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var pe=new A,qs=new At,ce=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Pa,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)qs.fromBufferAttribute(this,e),qs.applyMatrix3(t),this.setXY(e,qs.x,qs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=tn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=tn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=tn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=tn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=tn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array),r=Jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Pa&&(t.usage=this.usage),t}};var wr=class extends ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Tr=class extends ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var oe=class extends ce{constructor(t,e,n){super(new Float32Array(t),e,n)}},Bd=0,We=new Vt,Io=new ue,Ai=new A,Be=new rn,us=new rn,Me=new A,qt=class i extends An{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xh(t)?Tr:wr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Nt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,n){return We.makeTranslation(t,e,n),this.applyMatrix4(We),this}scale(t,e,n){return We.makeScale(t,e,n),this.applyMatrix4(We),this}lookAt(t){return Io.lookAt(t),Io.updateMatrix(),this.applyMatrix4(Io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new oe(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Be.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,Be.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,Be.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(Be.min),this.boundingBox.expandByPoint(Be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){let n=this.boundingSphere.center;if(Be.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];us.setFromBufferAttribute(a),this.morphTargetsRelative?(Me.addVectors(Be.min,us.min),Be.expandByPoint(Me),Me.addVectors(Be.max,us.max),Be.expandByPoint(Me)):(Be.expandByPoint(us.min),Be.expandByPoint(us.max))}Be.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Me));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Me.fromBufferAttribute(a,c),l&&(Ai.fromBufferAttribute(t,c),Me.add(Ai)),s=Math.max(s,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ce(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new A,l[I]=new A;let c=new A,h=new A,d=new A,u=new At,p=new At,g=new At,x=new A,m=new A;function f(I,M,b){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,b),u.fromBufferAttribute(r,I),p.fromBufferAttribute(r,M),g.fromBufferAttribute(r,b),h.sub(c),d.sub(c),p.sub(u),g.sub(u);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),a[I].add(x),a[M].add(x),a[b].add(x),l[I].add(m),l[M].add(m),l[b].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let I=0,M=y.length;I<M;++I){let b=y[I],P=b.start,L=b.count;for(let D=P,B=P+L;D<B;D+=3)f(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let v=new A,_=new A,C=new A,S=new A;function T(I){C.fromBufferAttribute(s,I),S.copy(C);let M=a[I];v.copy(M),v.sub(C.multiplyScalar(C.dot(M))).normalize(),_.crossVectors(S,M);let P=_.dot(l[I])<0?-1:1;o.setXYZW(I,v.x,v.y,v.z,P)}for(let I=0,M=y.length;I<M;++I){let b=y[I],P=b.start,L=b.count;for(let D=P,B=P+L;D<B;D+=3)T(t.getX(D+0)),T(t.getX(D+1)),T(t.getX(D+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new A,r=new A,o=new A,a=new A,l=new A,c=new A,h=new A,d=new A;if(t)for(let u=0,p=t.count;u<p;u+=3){let g=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new ce(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],p=t(u,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},mc=new Vt,Qn=new li,Ys=new Gn,gc=new A,Zs=new A,$s=new A,js=new A,Lo=new A,Ks=new A,xc=new A,Js=new A,se=class extends ue{constructor(t=new qt,e=new Wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ks.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Lo.fromBufferAttribute(d,t),o?Ks.addScaledVector(Lo,h):Ks.addScaledVector(Lo.sub(e),h))}e.add(Ks)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(r),Qn.copy(t.ray).recast(t.near),!(Ys.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(Ys,gc)===null||Qn.origin.distanceToSquared(gc)>(t.far-t.near)**2))&&(mc.copy(r).invert(),Qn.copy(t.ray).applyMatrix4(mc),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qn)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let m=u[g],f=o[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,C=v;_<C;_+=3){let S=a.getX(_),T=a.getX(_+1),I=a.getX(_+2);s=Qs(this,f,t,n,c,h,d,S,T,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let y=a.getX(m),v=a.getX(m+1),_=a.getX(m+2);s=Qs(this,o,t,n,c,h,d,y,v,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let m=u[g],f=o[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,C=v;_<C;_+=3){let S=_,T=_+1,I=_+2;s=Qs(this,f,t,n,c,h,d,S,T,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let y=m,v=m+1,_=m+2;s=Qs(this,o,t,n,c,h,d,y,v,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function zd(i,t,e,n,s,r,o,a){let l;if(t.side===De?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===kn,a),l===null)return null;Js.copy(a),Js.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Js);return c<e.near||c>e.far?null:{distance:c,point:Js.clone(),object:i}}function Qs(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Zs),i.getVertexPosition(l,$s),i.getVertexPosition(c,js);let h=zd(i,t,e,n,Zs,$s,js,xc);if(h){let d=new A;en.getBarycoord(xc,Zs,$s,js,d),s&&(h.uv=en.getInterpolatedAttribute(s,a,l,c,d,new At)),r&&(h.uv1=en.getInterpolatedAttribute(r,a,l,c,d,new At)),o&&(h.normal=en.getInterpolatedAttribute(o,a,l,c,d,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new A,materialIndex:0};en.getNormal(Zs,$s,js,u.normal),h.face=u,h.barycoord=d}return h}var ws=class i extends qt{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(d,2));function g(x,m,f,y,v,_,C,S,T,I,M){let b=_/T,P=C/I,L=_/2,D=C/2,B=S/2,W=T+1,H=I+1,Z=0,V=0,et=new A;for(let nt=0;nt<H;nt++){let rt=nt*P-D;for(let pt=0;pt<W;pt++){let Dt=pt*b-L;et[x]=Dt*y,et[m]=rt*v,et[f]=B,c.push(et.x,et.y,et.z),et[x]=0,et[m]=0,et[f]=S>0?1:-1,h.push(et.x,et.y,et.z),d.push(pt/T),d.push(1-nt/I),Z+=1}}for(let nt=0;nt<I;nt++)for(let rt=0;rt<T;rt++){let pt=u+rt+W*nt,Dt=u+rt+W*(nt+1),q=u+(rt+1)+W*(nt+1),tt=u+(rt+1)+W*nt;l.push(pt,Dt,tt),l.push(Dt,q,tt),V+=6}a.addGroup(p,V,M),p+=V,u+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Yi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Pe(i){let t={};for(let e=0;e<i.length;e++){let n=Yi(i[e]);for(let s in n)t[s]=n[s]}return t}function Hd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function yh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}var Vd={clone:Yi,merge:Pe},kd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Se=class extends Rn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kd,this.fragmentShader=Gd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yi(t.uniforms),this.uniformsGroups=Hd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ar=class extends ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=En}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Bn=new A,_c=new At,yc=new At,Re=class extends Ar{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Es*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(zi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Es*2*Math.atan(Math.tan(zi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z)}getViewSize(t,e){return this.getViewBounds(t,_c,yc),e.subVectors(yc,_c)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(zi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ri=-90,Ci=1,Ua=class extends ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Re(Ri,Ci,t,e);s.layers=this.layers,this.add(s);let r=new Re(Ri,Ci,t,e);r.layers=this.layers,this.add(r);let o=new Re(Ri,Ci,t,e);o.layers=this.layers,this.add(o);let a=new Re(Ri,Ci,t,e);a.layers=this.layers,this.add(a);let l=new Re(Ri,Ci,t,e);l.layers=this.layers,this.add(l);let c=new Re(Ri,Ci,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===En)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===br)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Rr=class extends Ue{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Gi,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Fa=class extends sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Rr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:He}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ws(5,5,5),r=new Se({name:"CubemapFromEquirect",uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:Hn});r.uniforms.tEquirect.value=e;let o=new se(s,r),a=e.minFilter;return e.minFilter===hn&&(e.minFilter=He),new Ua(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Do=new A,Wd=new A,Xd=new Nt,ze=class{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Do.subVectors(n,e).cross(Wd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Do),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Xd.getNormalMatrix(t),s=this.coplanarPoint(Do).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ti=new Gn,tr=new A,Ts=class{constructor(t=new ze,e=new ze,n=new ze,s=new ze,r=new ze,o=new ze){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=En){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],p=s[8],g=s[9],x=s[10],m=s[11],f=s[12],y=s[13],v=s[14],_=s[15];if(n[0].setComponents(l-r,u-c,m-p,_-f).normalize(),n[1].setComponents(l+r,u+c,m+p,_+f).normalize(),n[2].setComponents(l+o,u+h,m+g,_+y).normalize(),n[3].setComponents(l-o,u-h,m-g,_-y).normalize(),n[4].setComponents(l-a,u-d,m-x,_-v).normalize(),e===En)n[5].setComponents(l+a,u+d,m+x,_+v).normalize();else if(e===br)n[5].setComponents(a,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(t){return ti.center.set(0,0,0),ti.radius=.7071067811865476,ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(tr.x=s.normal.x>0?t.max.x:t.min.x,tr.y=s.normal.y>0?t.max.y:t.min.y,tr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(tr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function vh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function qd(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){let g=d[u],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){let x=d[p];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Zi=class i extends qt{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){let y=f*u-o;for(let v=0;v<c;v++){let _=v*d-r;g.push(_,-y,0),x.push(0,0,1),m.push(v/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<a;y++){let v=y+c*f,_=y+c*(f+1),C=y+1+c*(f+1),S=y+1+c*f;p.push(v,_,S),p.push(_,C,S)}this.setIndex(p),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(x,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Yd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$d=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ef=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,nf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,of=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,af=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_f=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ef=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sf="gl_FragColor = linearToOutputTexel( gl_FragColor );",wf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Af=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Cf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,If=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Df=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ff=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Nf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Of=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Hf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Vf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$f=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ep=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,np=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ip=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,op=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ap=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,up=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_p=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ep=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ap=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Pp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ip=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Lp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Up=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Np=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Op=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Yp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,em=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,om=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,am=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,um=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_m=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ym=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Mm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Em=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bt={alphahash_fragment:Yd,alphahash_pars_fragment:Zd,alphamap_fragment:$d,alphamap_pars_fragment:jd,alphatest_fragment:Kd,alphatest_pars_fragment:Jd,aomap_fragment:Qd,aomap_pars_fragment:tf,batching_pars_vertex:ef,batching_vertex:nf,begin_vertex:sf,beginnormal_vertex:rf,bsdfs:of,iridescence_fragment:af,bumpmap_pars_fragment:lf,clipping_planes_fragment:cf,clipping_planes_pars_fragment:hf,clipping_planes_pars_vertex:uf,clipping_planes_vertex:df,color_fragment:ff,color_pars_fragment:pf,color_pars_vertex:mf,color_vertex:gf,common:xf,cube_uv_reflection_fragment:_f,defaultnormal_vertex:yf,displacementmap_pars_vertex:vf,displacementmap_vertex:bf,emissivemap_fragment:Mf,emissivemap_pars_fragment:Ef,colorspace_fragment:Sf,colorspace_pars_fragment:wf,envmap_fragment:Tf,envmap_common_pars_fragment:Af,envmap_pars_fragment:Rf,envmap_pars_vertex:Cf,envmap_physical_pars_fragment:Hf,envmap_vertex:Pf,fog_vertex:If,fog_pars_vertex:Lf,fog_fragment:Df,fog_pars_fragment:Uf,gradientmap_pars_fragment:Ff,lightmap_pars_fragment:Nf,lights_lambert_fragment:Of,lights_lambert_pars_fragment:Bf,lights_pars_begin:zf,lights_toon_fragment:Vf,lights_toon_pars_fragment:kf,lights_phong_fragment:Gf,lights_phong_pars_fragment:Wf,lights_physical_fragment:Xf,lights_physical_pars_fragment:qf,lights_fragment_begin:Yf,lights_fragment_maps:Zf,lights_fragment_end:$f,logdepthbuf_fragment:jf,logdepthbuf_pars_fragment:Kf,logdepthbuf_pars_vertex:Jf,logdepthbuf_vertex:Qf,map_fragment:tp,map_pars_fragment:ep,map_particle_fragment:np,map_particle_pars_fragment:ip,metalnessmap_fragment:sp,metalnessmap_pars_fragment:rp,morphinstance_vertex:op,morphcolor_vertex:ap,morphnormal_vertex:lp,morphtarget_pars_vertex:cp,morphtarget_vertex:hp,normal_fragment_begin:up,normal_fragment_maps:dp,normal_pars_fragment:fp,normal_pars_vertex:pp,normal_vertex:mp,normalmap_pars_fragment:gp,clearcoat_normal_fragment_begin:xp,clearcoat_normal_fragment_maps:_p,clearcoat_pars_fragment:yp,iridescence_pars_fragment:vp,opaque_fragment:bp,packing:Mp,premultiplied_alpha_fragment:Ep,project_vertex:Sp,dithering_fragment:wp,dithering_pars_fragment:Tp,roughnessmap_fragment:Ap,roughnessmap_pars_fragment:Rp,shadowmap_pars_fragment:Cp,shadowmap_pars_vertex:Pp,shadowmap_vertex:Ip,shadowmask_pars_fragment:Lp,skinbase_vertex:Dp,skinning_pars_vertex:Up,skinning_vertex:Fp,skinnormal_vertex:Np,specularmap_fragment:Op,specularmap_pars_fragment:Bp,tonemapping_fragment:zp,tonemapping_pars_fragment:Hp,transmission_fragment:Vp,transmission_pars_fragment:kp,uv_pars_fragment:Gp,uv_pars_vertex:Wp,uv_vertex:Xp,worldpos_vertex:qp,background_vert:Yp,background_frag:Zp,backgroundCube_vert:$p,backgroundCube_frag:jp,cube_vert:Kp,cube_frag:Jp,depth_vert:Qp,depth_frag:tm,distanceRGBA_vert:em,distanceRGBA_frag:nm,equirect_vert:im,equirect_frag:sm,linedashed_vert:rm,linedashed_frag:om,meshbasic_vert:am,meshbasic_frag:lm,meshlambert_vert:cm,meshlambert_frag:hm,meshmatcap_vert:um,meshmatcap_frag:dm,meshnormal_vert:fm,meshnormal_frag:pm,meshphong_vert:mm,meshphong_frag:gm,meshphysical_vert:xm,meshphysical_frag:_m,meshtoon_vert:ym,meshtoon_frag:vm,points_vert:bm,points_frag:Mm,shadow_vert:Em,shadow_frag:Sm,sprite_vert:wm,sprite_frag:Tm},lt={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},cn={basic:{uniforms:Pe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Pe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new yt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Pe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Pe([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Pe([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new yt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Pe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Pe([lt.points,lt.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Pe([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Pe([lt.common,lt.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Pe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Pe([lt.sprite,lt.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Pe([lt.common,lt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Pe([lt.lights,lt.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};cn.physical={uniforms:Pe([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};var er={r:0,b:0,g:0},ei=new dn,Am=new Vt;function Rm(i,t,e,n,s,r,o){let a=new yt(0),l=r===!0?0:1,c,h,d=null,u=0,p=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function x(y){let v=!1,_=g(y);_===null?f(a,l):_&&_.isColor&&(f(_,1),v=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,v){let _=g(v);_&&(_.isCubeTexture||_.mapping===Hr)?(h===void 0&&(h=new se(new ws(1,1,1),new Se({name:"BackgroundCubeMaterial",uniforms:Yi(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ei.copy(v.backgroundRotation),ei.x*=-1,ei.y*=-1,ei.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Am.makeRotationFromEuler(ei)),h.material.toneMapped=Wt.getTransfer(_.colorSpace)!==te,(d!==_||u!==_.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=_,u=_.version,p=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new se(new Zi(2,2),new Se({name:"BackgroundMaterial",uniforms:Yi(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Wt.getTransfer(_.colorSpace)!==te,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||u!==_.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=_,u=_.version,p=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,v){y.getRGB(er,yh(i)),n.buffers.color.setClear(er.r,er.g,er.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(a,l)},render:x,addToRenderList:m}}function Cm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(b,P,L,D,B){let W=!1,H=d(D,L,P);r!==H&&(r=H,c(r.object)),W=p(b,D,L,B),W&&g(b,D,L,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,_(b,P,L,D),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function d(b,P,L){let D=L.wireframe===!0,B=n[b.id];B===void 0&&(B={},n[b.id]=B);let W=B[P.id];W===void 0&&(W={},B[P.id]=W);let H=W[D];return H===void 0&&(H=u(l()),W[D]=H),H}function u(b){let P=[],L=[],D=[];for(let B=0;B<e;B++)P[B]=0,L[B]=0,D[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:L,attributeDivisors:D,object:b,attributes:{},index:null}}function p(b,P,L,D){let B=r.attributes,W=P.attributes,H=0,Z=L.getAttributes();for(let V in Z)if(Z[V].location>=0){let nt=B[V],rt=W[V];if(rt===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(rt=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(rt=b.instanceColor)),nt===void 0||nt.attribute!==rt||rt&&nt.data!==rt.data)return!0;H++}return r.attributesNum!==H||r.index!==D}function g(b,P,L,D){let B={},W=P.attributes,H=0,Z=L.getAttributes();for(let V in Z)if(Z[V].location>=0){let nt=W[V];nt===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(nt=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(nt=b.instanceColor));let rt={};rt.attribute=nt,nt&&nt.data&&(rt.data=nt.data),B[V]=rt,H++}r.attributes=B,r.attributesNum=H,r.index=D}function x(){let b=r.newAttributes;for(let P=0,L=b.length;P<L;P++)b[P]=0}function m(b){f(b,0)}function f(b,P){let L=r.newAttributes,D=r.enabledAttributes,B=r.attributeDivisors;L[b]=1,D[b]===0&&(i.enableVertexAttribArray(b),D[b]=1),B[b]!==P&&(i.vertexAttribDivisor(b,P),B[b]=P)}function y(){let b=r.newAttributes,P=r.enabledAttributes;for(let L=0,D=P.length;L<D;L++)P[L]!==b[L]&&(i.disableVertexAttribArray(L),P[L]=0)}function v(b,P,L,D,B,W,H){H===!0?i.vertexAttribIPointer(b,P,L,B,W):i.vertexAttribPointer(b,P,L,D,B,W)}function _(b,P,L,D){x();let B=D.attributes,W=L.getAttributes(),H=P.defaultAttributeValues;for(let Z in W){let V=W[Z];if(V.location>=0){let et=B[Z];if(et===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(et=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(et=b.instanceColor)),et!==void 0){let nt=et.normalized,rt=et.itemSize,pt=t.get(et);if(pt===void 0)continue;let Dt=pt.buffer,q=pt.type,tt=pt.bytesPerElement,_t=q===i.INT||q===i.UNSIGNED_INT||et.gpuType===hl;if(et.isInterleavedBufferAttribute){let ot=et.data,Q=ot.stride,j=et.offset;if(ot.isInstancedInterleavedBuffer){for(let at=0;at<V.locationSize;at++)f(V.location+at,ot.meshPerAttribute);b.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let at=0;at<V.locationSize;at++)m(V.location+at);i.bindBuffer(i.ARRAY_BUFFER,Dt);for(let at=0;at<V.locationSize;at++)v(V.location+at,rt/V.locationSize,q,nt,Q*tt,(j+rt/V.locationSize*at)*tt,_t)}else{if(et.isInstancedBufferAttribute){for(let ot=0;ot<V.locationSize;ot++)f(V.location+ot,et.meshPerAttribute);b.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let ot=0;ot<V.locationSize;ot++)m(V.location+ot);i.bindBuffer(i.ARRAY_BUFFER,Dt);for(let ot=0;ot<V.locationSize;ot++)v(V.location+ot,rt/V.locationSize,q,nt,rt*tt,rt/V.locationSize*ot*tt,_t)}}else if(H!==void 0){let nt=H[Z];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(V.location,nt);break;case 3:i.vertexAttrib3fv(V.location,nt);break;case 4:i.vertexAttrib4fv(V.location,nt);break;default:i.vertexAttrib1fv(V.location,nt)}}}}y()}function C(){I();for(let b in n){let P=n[b];for(let L in P){let D=P[L];for(let B in D)h(D[B].object),delete D[B];delete P[L]}delete n[b]}}function S(b){if(n[b.id]===void 0)return;let P=n[b.id];for(let L in P){let D=P[L];for(let B in D)h(D[B].object),delete D[B];delete P[L]}delete n[b.id]}function T(b){for(let P in n){let L=n[P];if(L[b.id]===void 0)continue;let D=L[b.id];for(let B in D)h(D[B].object),delete D[B];delete L[b.id]}}function I(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:S,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function Pm(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];e.update(p,n,1)}function l(c,h,d,u){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*u[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Im(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Ve&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let I=T===Ps&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==nn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==un&&!I)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:C,maxSamples:S}}function Lm(i){let t=this,e=null,n=0,s=!1,r=!1,o=new ze,a=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,v=y*4,_=f.clippingState||null;l.value=_,_=h(g,u,v,p);for(let C=0;C!==v;++C)_[C]=e[C];f.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let f=p+x*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,_=p;v!==x;++v,_+=4)o.copy(d[v]).applyMatrix4(y,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Dm(i){let t=new WeakMap;function e(o,a){return a===Qo?o.mapping=Gi:a===ta&&(o.mapping=Wi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Qo||a===ta)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Fa(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Xn=class extends Ar{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ni=4,vc=[.125,.215,.35,.446,.526,.582],ri=20,Uo=new Xn,bc=new yt,Fo=null,No=0,Oo=0,Bo=!1,ii=(1+Math.sqrt(5))/2,Pi=1/ii,Mc=[new A(-ii,Pi,0),new A(ii,Pi,0),new A(-Pi,0,ii),new A(Pi,0,ii),new A(0,ii,-Pi),new A(0,ii,Pi),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],Cr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Fo=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Oo=this._renderer.getActiveMipmapLevel(),Bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fo,No,Oo),this._renderer.xr.enabled=Bo,t.scissorTest=!1,nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gi||t.mapping===Wi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fo=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Oo=this._renderer.getActiveMipmapLevel(),Bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:He,minFilter:He,generateMipmaps:!1,type:Ps,format:Ve,colorSpace:Qi,depthBuffer:!1},s=Ec(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ec(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Um(r)),this._blurMaterial=Fm(r,t,e)}return s}_compileMaterial(t){let e=new se(this._lodPlanes[0],t);this._renderer.compile(e,Uo)}_sceneToCubeUV(t,e,n,s){let a=new Re(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(bc),h.toneMapping=Vn,h.autoClear=!1;let p=new Wn({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),g=new se(new ws,p),x=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(bc),x=!0);for(let f=0;f<6;f++){let y=f%3;y===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):y===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let v=this._cubeSize;nr(s,y*v,f>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Gi||t.mapping===Wi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new se(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;nr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Uo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Mc[(s-r-1)%Mc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new se(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ri-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):ri;m>ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ri}`);let f=[],y=0;for(let T=0;T<ri;++T){let I=T/x,M=Math.exp(-I*I/2);f.push(M),T===0?y+=M:T<m&&(y+=2*M)}for(let T=0;T<f.length;T++)f[T]=f[T]/y;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-n;let _=this._sizeLods[s],C=3*_*(s>v-Ni?s-v+Ni:0),S=4*(this._cubeSize-_);nr(e,C,S,3*_,2*_),l.setRenderTarget(e),l.render(d,Uo)}};function Um(i){let t=[],e=[],n=[],s=i,r=i-Ni+1+vc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Ni?l=vc[o-i+Ni-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,x=3,m=2,f=1,y=new Float32Array(x*g*p),v=new Float32Array(m*g*p),_=new Float32Array(f*g*p);for(let S=0;S<p;S++){let T=S%3*2/3-1,I=S>2?0:-1,M=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];y.set(M,x*g*S),v.set(u,m*g*S);let b=[S,S,S,S,S,S];_.set(b,f*g*S)}let C=new qt;C.setAttribute("position",new ce(y,x)),C.setAttribute("uv",new ce(v,m)),C.setAttribute("faceIndex",new ce(_,f)),t.push(C),s>Ni&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ec(i,t,e){let n=new sn(i,t,e);return n.texture.mapping=Hr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Fm(i,t,e){let n=new Float32Array(ri),s=new A(0,1,0);return new Se({name:"SphericalGaussianBlur",defines:{n:ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Sc(){return new Se({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function wc(){return new Se({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function _l(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Nm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Qo||l===ta,h=l===Gi||l===Wi;if(c||h){let d=t.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Cr(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Cr(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Om(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&_s("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Bm(i,t,e,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);for(let g in u.morphAttributes){let x=u.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)t.remove(x[m])}u.removeEventListener("dispose",o),delete s[u.id];let p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)t.update(u[g],i.ARRAY_BUFFER);let p=d.morphAttributes;for(let g in p){let x=p[g];for(let m=0,f=x.length;m<f;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(d){let u=[],p=d.index,g=d.attributes.position,x=0;if(p!==null){let y=p.array;x=p.version;for(let v=0,_=y.length;v<_;v+=3){let C=y[v+0],S=y[v+1],T=y[v+2];u.push(C,S,S,T,T,C)}}else if(g!==void 0){let y=g.array;x=g.version;for(let v=0,_=y.length/3-1;v<_;v+=3){let C=v+0,S=v+1,T=v+2;u.push(C,S,S,T,T,C)}}else return;let m=new(xh(u)?Tr:wr)(u,1);m.version=x;let f=r.get(d);f&&t.remove(f),r.set(d,m)}function h(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function zm(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,p){i.drawElements(n,p,r,u*o),e.update(p,n,1)}function c(u,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,u*o,g),e.update(p,n,g))}function h(u,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function d(u,p,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/o,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,x,0,g);let f=0;for(let y=0;y<g;y++)f+=p[y]*x[y];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Hm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Vm(i,t,e){let n=new WeakMap,s=new fe;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let M=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",M)};u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;p===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let _=a.attributes.position.count*v,C=1;_>t.maxTextureSize&&(C=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let S=new Float32Array(_*C*4*d),T=new Sr(S,_,C,d);T.type=un,T.needsUpdate=!0;let I=v*4;for(let b=0;b<d;b++){let P=m[b],L=f[b],D=y[b],B=_*C*4*b;for(let W=0;W<P.count;W++){let H=W*I;p===!0&&(s.fromBufferAttribute(P,W),S[B+H+0]=s.x,S[B+H+1]=s.y,S[B+H+2]=s.z,S[B+H+3]=0),g===!0&&(s.fromBufferAttribute(L,W),S[B+H+4]=s.x,S[B+H+5]=s.y,S[B+H+6]=s.z,S[B+H+7]=0),x===!0&&(s.fromBufferAttribute(D,W),S[B+H+8]=s.x,S[B+H+9]=s.y,S[B+H+10]=s.z,S[B+H+11]=D.itemSize===4?s.w:1)}}u={count:d,texture:T,size:new At(_,C)},n.set(a,u),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function km(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Pr=class extends Ue{constructor(t,e,n,s,r,o,a,l,c,h=Bi){if(h!==Bi&&h!==qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Bi&&(n=ai),n===void 0&&h===qi&&(n=Xi),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ke,this.minFilter=l!==void 0?l:ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},bh=new Ue,Tc=new Pr(1,1),Mh=new Sr,Eh=new Da,Sh=new Rr,Ac=[],Rc=[],Cc=new Float32Array(16),Pc=new Float32Array(9),Ic=new Float32Array(4);function ts(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ac[s];if(r===void 0&&(r=new Float32Array(s),Ac[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function _e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function kr(i,t){let e=Rc[t];e===void 0&&(e=new Int32Array(t),Rc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Gm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Wm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2fv(this.addr,t),ye(e,t)}}function Xm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;i.uniform3fv(this.addr,t),ye(e,t)}}function qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4fv(this.addr,t),ye(e,t)}}function Ym(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(_e(e,n))return;Ic.set(n),i.uniformMatrix2fv(this.addr,!1,Ic),ye(e,n)}}function Zm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(_e(e,n))return;Pc.set(n),i.uniformMatrix3fv(this.addr,!1,Pc),ye(e,n)}}function $m(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(_e(e,n))return;Cc.set(n),i.uniformMatrix4fv(this.addr,!1,Cc),ye(e,n)}}function jm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Km(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2iv(this.addr,t),ye(e,t)}}function Jm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3iv(this.addr,t),ye(e,t)}}function Qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4iv(this.addr,t),ye(e,t)}}function t0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function e0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2uiv(this.addr,t),ye(e,t)}}function n0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3uiv(this.addr,t),ye(e,t)}}function i0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4uiv(this.addr,t),ye(e,t)}}function s0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Tc.compareFunction=mh,r=Tc):r=bh,e.setTexture2D(t||r,s)}function r0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Eh,s)}function o0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Sh,s)}function a0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Mh,s)}function l0(i){switch(i){case 5126:return Gm;case 35664:return Wm;case 35665:return Xm;case 35666:return qm;case 35674:return Ym;case 35675:return Zm;case 35676:return $m;case 5124:case 35670:return jm;case 35667:case 35671:return Km;case 35668:case 35672:return Jm;case 35669:case 35673:return Qm;case 5125:return t0;case 36294:return e0;case 36295:return n0;case 36296:return i0;case 35678:case 36198:case 36298:case 36306:case 35682:return s0;case 35679:case 36299:case 36307:return r0;case 35680:case 36300:case 36308:case 36293:return o0;case 36289:case 36303:case 36311:case 36292:return a0}}function c0(i,t){i.uniform1fv(this.addr,t)}function h0(i,t){let e=ts(t,this.size,2);i.uniform2fv(this.addr,e)}function u0(i,t){let e=ts(t,this.size,3);i.uniform3fv(this.addr,e)}function d0(i,t){let e=ts(t,this.size,4);i.uniform4fv(this.addr,e)}function f0(i,t){let e=ts(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function p0(i,t){let e=ts(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function m0(i,t){let e=ts(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function g0(i,t){i.uniform1iv(this.addr,t)}function x0(i,t){i.uniform2iv(this.addr,t)}function _0(i,t){i.uniform3iv(this.addr,t)}function y0(i,t){i.uniform4iv(this.addr,t)}function v0(i,t){i.uniform1uiv(this.addr,t)}function b0(i,t){i.uniform2uiv(this.addr,t)}function M0(i,t){i.uniform3uiv(this.addr,t)}function E0(i,t){i.uniform4uiv(this.addr,t)}function S0(i,t,e){let n=this.cache,s=t.length,r=kr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||bh,r[o])}function w0(i,t,e){let n=this.cache,s=t.length,r=kr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Eh,r[o])}function T0(i,t,e){let n=this.cache,s=t.length,r=kr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Sh,r[o])}function A0(i,t,e){let n=this.cache,s=t.length,r=kr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Mh,r[o])}function R0(i){switch(i){case 5126:return c0;case 35664:return h0;case 35665:return u0;case 35666:return d0;case 35674:return f0;case 35675:return p0;case 35676:return m0;case 5124:case 35670:return g0;case 35667:case 35671:return x0;case 35668:case 35672:return _0;case 35669:case 35673:return y0;case 5125:return v0;case 36294:return b0;case 36295:return M0;case 36296:return E0;case 35678:case 36198:case 36298:case 36306:case 35682:return S0;case 35679:case 36299:case 36307:return w0;case 35680:case 36300:case 36308:case 36293:return T0;case 36289:case 36303:case 36311:case 36292:return A0}}var Na=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=l0(e.type)}},Oa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=R0(e.type)}},Ba=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},zo=/(\w+)(\])?(\[|\.)?/g;function Lc(i,t){i.seq.push(t),i.map[t.id]=t}function C0(i,t,e){let n=i.name,s=n.length;for(zo.lastIndex=0;;){let r=zo.exec(n),o=zo.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Lc(e,c===void 0?new Na(a,i,t):new Oa(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Ba(a),Lc(e,d)),e=d}}}var Vi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);C0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Dc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var P0=37297,I0=0;function L0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Uc=new Nt;function D0(i){Wt._getMatrix(Uc,Wt.workingColorSpace,i);let t=`mat3( ${Uc.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(i)){case Vr:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Fc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+L0(i.getShaderSource(t),o)}else return s}function U0(i,t){let e=D0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function F0(i,t){let e;switch(t){case Wu:e="Linear";break;case Xu:e="Reinhard";break;case qu:e="Cineon";break;case Yu:e="ACESFilmic";break;case $u:e="AgX";break;case ju:e="Neutral";break;case Zu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ir=new A;function N0(){Wt.getLuminanceCoefficients(ir);let i=ir.x.toFixed(4),t=ir.y.toFixed(4),e=ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function O0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ys).join(`
`)}function B0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function z0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ys(i){return i!==""}function Nc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Oc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var H0=/^[ \t]*#include +<([\w\d./]+)>/gm;function za(i){return i.replace(H0,k0)}var V0=new Map;function k0(i,t){let e=Bt[t];if(e===void 0){let n=V0.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return za(e)}var G0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bc(i){return i.replace(G0,W0)}function W0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function X0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ih?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Eu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Mn&&(t="SHADOWMAP_TYPE_VSM"),t}function q0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Gi:case Wi:t="ENVMAP_TYPE_CUBE";break;case Hr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Y0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Wi:t="ENVMAP_MODE_REFRACTION";break}return t}function Z0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case cl:t="ENVMAP_BLENDING_MULTIPLY";break;case ku:t="ENVMAP_BLENDING_MIX";break;case Gu:t="ENVMAP_BLENDING_ADD";break}return t}function $0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function j0(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=X0(e),c=q0(e),h=Y0(e),d=Z0(e),u=$0(e),p=O0(e),g=B0(r),x=s.createProgram(),m,f,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ys).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ys).join(`
`),f.length>0&&(f+=`
`)):(m=[zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ys).join(`
`),f=[zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vn?"#define TONE_MAPPING":"",e.toneMapping!==Vn?Bt.tonemapping_pars_fragment:"",e.toneMapping!==Vn?F0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,U0("linearToOutputTexel",e.outputColorSpace),N0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ys).join(`
`)),o=za(o),o=Nc(o,e),o=Oc(o,e),a=za(a),a=Nc(a,e),a=Oc(a,e),o=Bc(o),a=Bc(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Tn?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Tn?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let v=y+m+o,_=y+f+a,C=Dc(s,s.VERTEX_SHADER,v),S=Dc(s,s.FRAGMENT_SHADER,_);s.attachShader(x,C),s.attachShader(x,S),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(P){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(x).trim(),D=s.getShaderInfoLog(C).trim(),B=s.getShaderInfoLog(S).trim(),W=!0,H=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,C,S);else{let Z=Fc(s,C,"vertex"),V=Fc(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+L+`
`+Z+`
`+V)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(D===""||B==="")&&(H=!1);H&&(P.diagnostics={runnable:W,programLog:L,vertexShader:{log:D,prefix:m},fragmentShader:{log:B,prefix:f}})}s.deleteShader(C),s.deleteShader(S),I=new Vi(s,x),M=z0(s,x)}let I;this.getUniforms=function(){return I===void 0&&T(this),I};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,P0)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=I0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=S,this}var K0=0,Ha=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Va(t),e.set(t,n)),n}},Va=class{constructor(t){this.id=K0++,this.code=t,this.usedTimes=0}};function J0(i,t,e,n,s,r,o){let a=new Ss,l=new Ha,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,b,P,L,D){let B=L.fog,W=D.geometry,H=M.isMeshStandardMaterial?L.environment:null,Z=(M.isMeshStandardMaterial?e:t).get(M.envMap||H),V=Z&&Z.mapping===Hr?Z.image.height:null,et=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let nt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,rt=nt!==void 0?nt.length:0,pt=0;W.morphAttributes.position!==void 0&&(pt=1),W.morphAttributes.normal!==void 0&&(pt=2),W.morphAttributes.color!==void 0&&(pt=3);let Dt,q,tt,_t;if(et){let Kt=cn[et];Dt=Kt.vertexShader,q=Kt.fragmentShader}else Dt=M.vertexShader,q=M.fragmentShader,l.update(M),tt=l.getVertexShaderID(M),_t=l.getFragmentShaderID(M);let ot=i.getRenderTarget(),Q=i.state.buffers.depth.getReversed(),j=D.isInstancedMesh===!0,at=D.isBatchedMesh===!0,zt=!!M.map,Ct=!!M.matcap,jt=!!Z,F=!!M.aoMap,ge=!!M.lightMap,Ht=!!M.bumpMap,Pt=!!M.normalMap,Et=!!M.displacementMap,Yt=!!M.emissiveMap,Tt=!!M.metalnessMap,R=!!M.roughnessMap,E=M.anisotropy>0,z=M.clearcoat>0,Y=M.dispersion>0,J=M.iridescence>0,$=M.sheen>0,St=M.transmission>0,ht=E&&!!M.anisotropyMap,mt=z&&!!M.clearcoatMap,Gt=z&&!!M.clearcoatNormalMap,it=z&&!!M.clearcoatRoughnessMap,gt=J&&!!M.iridescenceMap,Rt=J&&!!M.iridescenceThicknessMap,It=$&&!!M.sheenColorMap,xt=$&&!!M.sheenRoughnessMap,kt=!!M.specularMap,Ot=!!M.specularColorMap,ne=!!M.specularIntensityMap,U=St&&!!M.transmissionMap,ct=St&&!!M.thicknessMap,X=!!M.gradientMap,K=!!M.alphaMap,ft=M.alphaTest>0,ut=!!M.alphaHash,Ut=!!M.extensions,de=Vn;M.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(de=i.toneMapping);let we={shaderID:et,shaderType:M.type,shaderName:M.name,vertexShader:Dt,fragmentShader:q,defines:M.defines,customVertexShaderID:tt,customFragmentShaderID:_t,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:at,batchingColor:at&&D._colorsTexture!==null,instancing:j,instancingColor:j&&D.instanceColor!==null,instancingMorph:j&&D.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Qi,alphaToCoverage:!!M.alphaToCoverage,map:zt,matcap:Ct,envMap:jt,envMapMode:jt&&Z.mapping,envMapCubeUVHeight:V,aoMap:F,lightMap:ge,bumpMap:Ht,normalMap:Pt,displacementMap:u&&Et,emissiveMap:Yt,normalMapObjectSpace:Pt&&M.normalMapType===td,normalMapTangentSpace:Pt&&M.normalMapType===ph,metalnessMap:Tt,roughnessMap:R,anisotropy:E,anisotropyMap:ht,clearcoat:z,clearcoatMap:mt,clearcoatNormalMap:Gt,clearcoatRoughnessMap:it,dispersion:Y,iridescence:J,iridescenceMap:gt,iridescenceThicknessMap:Rt,sheen:$,sheenColorMap:It,sheenRoughnessMap:xt,specularMap:kt,specularColorMap:Ot,specularIntensityMap:ne,transmission:St,transmissionMap:U,thicknessMap:ct,gradientMap:X,opaque:M.transparent===!1&&M.blending===Oi&&M.alphaToCoverage===!1,alphaMap:K,alphaTest:ft,alphaHash:ut,combine:M.combine,mapUv:zt&&x(M.map.channel),aoMapUv:F&&x(M.aoMap.channel),lightMapUv:ge&&x(M.lightMap.channel),bumpMapUv:Ht&&x(M.bumpMap.channel),normalMapUv:Pt&&x(M.normalMap.channel),displacementMapUv:Et&&x(M.displacementMap.channel),emissiveMapUv:Yt&&x(M.emissiveMap.channel),metalnessMapUv:Tt&&x(M.metalnessMap.channel),roughnessMapUv:R&&x(M.roughnessMap.channel),anisotropyMapUv:ht&&x(M.anisotropyMap.channel),clearcoatMapUv:mt&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:It&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:xt&&x(M.sheenRoughnessMap.channel),specularMapUv:kt&&x(M.specularMap.channel),specularColorMapUv:Ot&&x(M.specularColorMap.channel),specularIntensityMapUv:ne&&x(M.specularIntensityMap.channel),transmissionMapUv:U&&x(M.transmissionMap.channel),thicknessMapUv:ct&&x(M.thicknessMap.channel),alphaMapUv:K&&x(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Pt||E),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!W.attributes.uv&&(zt||K),fog:!!B,useFog:M.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Q,skinning:D.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:pt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:de,decodeVideoTexture:zt&&M.map.isVideoTexture===!0&&Wt.getTransfer(M.map.colorSpace)===te,decodeVideoTextureEmissive:Yt&&M.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(M.emissiveMap.colorSpace)===te,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Le,flipSided:M.side===De,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ut&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&M.extensions.multiDraw===!0||at)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return we.vertexUv1s=c.has(1),we.vertexUv2s=c.has(2),we.vertexUv3s=c.has(3),c.clear(),we}function f(M){let b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(let P in M.defines)b.push(P),b.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(y(b,M),v(b,M),b.push(i.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function y(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function v(M,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),M.push(a.mask)}function _(M){let b=g[M.type],P;if(b){let L=cn[b];P=Vd.clone(L.uniforms)}else P=M.uniforms;return P}function C(M,b){let P;for(let L=0,D=h.length;L<D;L++){let B=h[L];if(B.cacheKey===b){P=B,++P.usedTimes;break}}return P===void 0&&(P=new j0(i,b,M,r),h.push(P)),P}function S(M){if(--M.usedTimes===0){let b=h.indexOf(M);h[b]=h[h.length-1],h.pop(),M.destroy()}}function T(M){l.remove(M)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:C,releaseProgram:S,releaseShaderCache:T,programs:h,dispose:I}}function Q0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function tg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Hc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Vc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,u,p,g,x,m){let f=i[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},i[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=x,f.group=m),t++,f}function a(d,u,p,g,x,m){let f=o(d,u,p,g,x,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(d,u,p,g,x,m){let f=o(d,u,p,g,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(d,u){e.length>1&&e.sort(d||tg),n.length>1&&n.sort(u||Hc),s.length>1&&s.sort(u||Hc)}function h(){for(let d=t,u=i.length;d<u;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function eg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Vc,i.set(n,[o])):s>=r.length?(o=new Vc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function ng(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new yt};break;case"SpotLight":e={position:new A,direction:new A,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":e={color:new yt,position:new A,halfWidth:new A,halfHeight:new A};break}return i[t.id]=e,e}}}function ig(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var sg=0;function rg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function og(i){let t=new ng,e=ig(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);let s=new A,r=new Vt,o=new Vt;function a(c){let h=0,d=0,u=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,y=0,v=0,_=0,C=0,S=0,T=0;c.sort(rg);for(let M=0,b=c.length;M<b;M++){let P=c[M],L=P.color,D=P.intensity,B=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=L.r*D,d+=L.g*D,u+=L.b*D;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],D);T++}else if(P.isDirectionalLight){let H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Z=P.shadow,V=e.get(P);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=P.shadow.matrix,y++}n.directional[p]=H,p++}else if(P.isSpotLight){let H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(L).multiplyScalar(D),H.distance=B,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[x]=H;let Z=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,Z.updateMatrices(P),P.castShadow&&S++),n.spotLightMatrix[x]=Z.matrix,P.castShadow){let V=e.get(P);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=W,_++}x++}else if(P.isRectAreaLight){let H=t.get(P);H.color.copy(L).multiplyScalar(D),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=H,m++}else if(P.isPointLight){let H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){let Z=P.shadow,V=e.get(P);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,V.shadowCameraNear=Z.camera.near,V.shadowCameraFar=Z.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=P.shadow.matrix,v++}n.point[g]=H,g++}else if(P.isHemisphereLight){let H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(D),H.groundColor.copy(P.groundColor).multiplyScalar(D),n.hemi[f]=H,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=lt.LTC_FLOAT_1,n.rectAreaLTC2=lt.LTC_FLOAT_2):(n.rectAreaLTC1=lt.LTC_HALF_1,n.rectAreaLTC2=lt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==m||I.hemiLength!==f||I.numDirectionalShadows!==y||I.numPointShadows!==v||I.numSpotShadows!==_||I.numSpotMaps!==C||I.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+C-S,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=T,I.directionalLength=p,I.pointLength=g,I.spotLength=x,I.rectAreaLength=m,I.hemiLength=f,I.numDirectionalShadows=y,I.numPointShadows=v,I.numSpotShadows=_,I.numSpotMaps=C,I.numLightProbes=T,n.version=sg++)}function l(c,h){let d=0,u=0,p=0,g=0,x=0,m=h.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){let v=c[f];if(v.isDirectionalLight){let _=n.directional[d];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(v.isSpotLight){let _=n.spot[p];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let _=n.point[u];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),u++}else if(v.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function kc(i){let t=new og(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ag(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new kc(i),t.set(s,[a])):r>=o.length?(a=new kc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var ka=class extends Rn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ju,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ga=class extends Rn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},lg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hg(i,t,e){let n=new Ts,s=new At,r=new At,o=new fe,a=new ka({depthPacking:Qu}),l=new Ga,c={},h=e.maxTextureSize,d={[kn]:De,[De]:kn,[Le]:Le},u=new Se({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:lg,fragmentShader:cg}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new qt;g.setAttribute("position",new ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new se(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ih;let f=this.type;this.render=function(S,T,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let M=i.getRenderTarget(),b=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Hn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let D=f!==Mn&&this.type===Mn,B=f===Mn&&this.type!==Mn;for(let W=0,H=S.length;W<H;W++){let Z=S[W],V=Z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let et=V.getFrameExtents();if(s.multiply(et),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/et.x),s.x=r.x*et.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/et.y),s.y=r.y*et.y,V.mapSize.y=r.y)),V.map===null||D===!0||B===!0){let rt=this.type!==Mn?{minFilter:ke,magFilter:ke}:{};V.map!==null&&V.map.dispose(),V.map=new sn(s.x,s.y,rt),V.map.texture.name=Z.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let nt=V.getViewportCount();for(let rt=0;rt<nt;rt++){let pt=V.getViewport(rt);o.set(r.x*pt.x,r.y*pt.y,r.x*pt.z,r.y*pt.w),L.viewport(o),V.updateMatrices(Z,rt),n=V.getFrustum(),_(T,I,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===Mn&&y(V,I),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(M,b,P)};function y(S,T){let I=t.update(x);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new sn(s.x,s.y)),u.uniforms.shadow_pass.value=S.map.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(T,null,I,u,x,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(T,null,I,p,x,null)}function v(S,T,I,M){let b=null,P=I.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)b=P;else if(b=I.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let L=b.uuid,D=T.uuid,B=c[L];B===void 0&&(B={},c[L]=B);let W=B[D];W===void 0&&(W=b.clone(),B[D]=W,T.addEventListener("dispose",C)),b=W}if(b.visible=T.visible,b.wireframe=T.wireframe,M===Mn?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:d[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let L=i.properties.get(b);L.light=I}return b}function _(S,T,I,M,b){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&b===Mn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,S.matrixWorld);let D=t.update(S),B=S.material;if(Array.isArray(B)){let W=D.groups;for(let H=0,Z=W.length;H<Z;H++){let V=W[H],et=B[V.materialIndex];if(et&&et.visible){let nt=v(S,et,M,b);S.onBeforeShadow(i,S,T,I,D,nt,V),i.renderBufferDirect(I,null,D,nt,S,V),S.onAfterShadow(i,S,T,I,D,nt,V)}}}else if(B.visible){let W=v(S,B,M,b);S.onBeforeShadow(i,S,T,I,D,W,null),i.renderBufferDirect(I,null,D,W,S,null),S.onAfterShadow(i,S,T,I,D,W,null)}}let L=S.children;for(let D=0,B=L.length;D<B;D++)_(L[D],T,I,M,b)}function C(S){S.target.removeEventListener("dispose",C);for(let I in c){let M=c[I],b=S.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}var ug={[qo]:Yo,[Zo]:Ko,[$o]:Jo,[ki]:jo,[Yo]:qo,[Ko]:Zo,[Jo]:$o,[jo]:ki};function dg(i,t){function e(){let U=!1,ct=new fe,X=null,K=new fe(0,0,0,0);return{setMask:function(ft){X!==ft&&!U&&(i.colorMask(ft,ft,ft,ft),X=ft)},setLocked:function(ft){U=ft},setClear:function(ft,ut,Ut,de,we){we===!0&&(ft*=de,ut*=de,Ut*=de),ct.set(ft,ut,Ut,de),K.equals(ct)===!1&&(i.clearColor(ft,ut,Ut,de),K.copy(ct))},reset:function(){U=!1,X=null,K.set(-1,0,0,0)}}}function n(){let U=!1,ct=!1,X=null,K=null,ft=null;return{setReversed:function(ut){if(ct!==ut){let Ut=t.get("EXT_clip_control");ct?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT);let de=ft;ft=null,this.setClear(de)}ct=ut},getReversed:function(){return ct},setTest:function(ut){ut?ot(i.DEPTH_TEST):Q(i.DEPTH_TEST)},setMask:function(ut){X!==ut&&!U&&(i.depthMask(ut),X=ut)},setFunc:function(ut){if(ct&&(ut=ug[ut]),K!==ut){switch(ut){case qo:i.depthFunc(i.NEVER);break;case Yo:i.depthFunc(i.ALWAYS);break;case Zo:i.depthFunc(i.LESS);break;case ki:i.depthFunc(i.LEQUAL);break;case $o:i.depthFunc(i.EQUAL);break;case jo:i.depthFunc(i.GEQUAL);break;case Ko:i.depthFunc(i.GREATER);break;case Jo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=ut}},setLocked:function(ut){U=ut},setClear:function(ut){ft!==ut&&(ct&&(ut=1-ut),i.clearDepth(ut),ft=ut)},reset:function(){U=!1,X=null,K=null,ft=null,ct=!1}}}function s(){let U=!1,ct=null,X=null,K=null,ft=null,ut=null,Ut=null,de=null,we=null;return{setTest:function(Kt){U||(Kt?ot(i.STENCIL_TEST):Q(i.STENCIL_TEST))},setMask:function(Kt){ct!==Kt&&!U&&(i.stencilMask(Kt),ct=Kt)},setFunc:function(Kt,$e,mn){(X!==Kt||K!==$e||ft!==mn)&&(i.stencilFunc(Kt,$e,mn),X=Kt,K=$e,ft=mn)},setOp:function(Kt,$e,mn){(ut!==Kt||Ut!==$e||de!==mn)&&(i.stencilOp(Kt,$e,mn),ut=Kt,Ut=$e,de=mn)},setLocked:function(Kt){U=Kt},setClear:function(Kt){we!==Kt&&(i.clearStencil(Kt),we=Kt)},reset:function(){U=!1,ct=null,X=null,K=null,ft=null,ut=null,Ut=null,de=null,we=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,p=[],g=null,x=!1,m=null,f=null,y=null,v=null,_=null,C=null,S=null,T=new yt(0,0,0),I=0,M=!1,b=null,P=null,L=null,D=null,B=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,Z=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=Z>=2);let et=null,nt={},rt=i.getParameter(i.SCISSOR_BOX),pt=i.getParameter(i.VIEWPORT),Dt=new fe().fromArray(rt),q=new fe().fromArray(pt);function tt(U,ct,X,K){let ft=new Uint8Array(4),ut=i.createTexture();i.bindTexture(U,ut),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<X;Ut++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(ct+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return ut}let _t={};_t[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(i.DEPTH_TEST),o.setFunc(ki),Ht(!1),Pt(Xl),ot(i.CULL_FACE),F(Hn);function ot(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Q(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function j(U,ct){return d[U]!==ct?(i.bindFramebuffer(U,ct),d[U]=ct,U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ct),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function at(U,ct){let X=p,K=!1;if(U){X=u.get(ct),X===void 0&&(X=[],u.set(ct,X));let ft=U.textures;if(X.length!==ft.length||X[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,Ut=ft.length;ut<Ut;ut++)X[ut]=i.COLOR_ATTACHMENT0+ut;X.length=ft.length,K=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,K=!0);K&&i.drawBuffers(X)}function zt(U){return g!==U?(i.useProgram(U),g=U,!0):!1}let Ct={[si]:i.FUNC_ADD,[wu]:i.FUNC_SUBTRACT,[Tu]:i.FUNC_REVERSE_SUBTRACT};Ct[Au]=i.MIN,Ct[Ru]=i.MAX;let jt={[Cu]:i.ZERO,[Pu]:i.ONE,[Iu]:i.SRC_COLOR,[Wo]:i.SRC_ALPHA,[Ou]:i.SRC_ALPHA_SATURATE,[Fu]:i.DST_COLOR,[Du]:i.DST_ALPHA,[Lu]:i.ONE_MINUS_SRC_COLOR,[Xo]:i.ONE_MINUS_SRC_ALPHA,[Nu]:i.ONE_MINUS_DST_COLOR,[Uu]:i.ONE_MINUS_DST_ALPHA,[Bu]:i.CONSTANT_COLOR,[zu]:i.ONE_MINUS_CONSTANT_COLOR,[Hu]:i.CONSTANT_ALPHA,[Vu]:i.ONE_MINUS_CONSTANT_ALPHA};function F(U,ct,X,K,ft,ut,Ut,de,we,Kt){if(U===Hn){x===!0&&(Q(i.BLEND),x=!1);return}if(x===!1&&(ot(i.BLEND),x=!0),U!==Su){if(U!==m||Kt!==M){if((f!==si||_!==si)&&(i.blendEquation(i.FUNC_ADD),f=si,_=si),Kt)switch(U){case Oi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ql:i.blendFunc(i.ONE,i.ONE);break;case Yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ql:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,v=null,C=null,S=null,T.set(0,0,0),I=0,m=U,M=Kt}return}ft=ft||ct,ut=ut||X,Ut=Ut||K,(ct!==f||ft!==_)&&(i.blendEquationSeparate(Ct[ct],Ct[ft]),f=ct,_=ft),(X!==y||K!==v||ut!==C||Ut!==S)&&(i.blendFuncSeparate(jt[X],jt[K],jt[ut],jt[Ut]),y=X,v=K,C=ut,S=Ut),(de.equals(T)===!1||we!==I)&&(i.blendColor(de.r,de.g,de.b,we),T.copy(de),I=we),m=U,M=!1}function ge(U,ct){U.side===Le?Q(i.CULL_FACE):ot(i.CULL_FACE);let X=U.side===De;ct&&(X=!X),Ht(X),U.blending===Oi&&U.transparent===!1?F(Hn):F(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let K=U.stencilWrite;a.setTest(K),K&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Yt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):Q(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(U){b!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),b=U)}function Pt(U){U!==bu?(ot(i.CULL_FACE),U!==P&&(U===Xl?i.cullFace(i.BACK):U===Mu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Q(i.CULL_FACE),P=U}function Et(U){U!==L&&(H&&i.lineWidth(U),L=U)}function Yt(U,ct,X){U?(ot(i.POLYGON_OFFSET_FILL),(D!==ct||B!==X)&&(i.polygonOffset(ct,X),D=ct,B=X)):Q(i.POLYGON_OFFSET_FILL)}function Tt(U){U?ot(i.SCISSOR_TEST):Q(i.SCISSOR_TEST)}function R(U){U===void 0&&(U=i.TEXTURE0+W-1),et!==U&&(i.activeTexture(U),et=U)}function E(U,ct,X){X===void 0&&(et===null?X=i.TEXTURE0+W-1:X=et);let K=nt[X];K===void 0&&(K={type:void 0,texture:void 0},nt[X]=K),(K.type!==U||K.texture!==ct)&&(et!==X&&(i.activeTexture(X),et=X),i.bindTexture(U,ct||_t[U]),K.type=U,K.texture=ct)}function z(){let U=nt[et];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function St(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ht(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Gt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function gt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Rt(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function It(U){Dt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Dt.copy(U))}function xt(U){q.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),q.copy(U))}function kt(U,ct){let X=c.get(ct);X===void 0&&(X=new WeakMap,c.set(ct,X));let K=X.get(U);K===void 0&&(K=i.getUniformBlockIndex(ct,U.name),X.set(U,K))}function Ot(U,ct){let K=c.get(ct).get(U);l.get(ct)!==K&&(i.uniformBlockBinding(ct,K,U.__bindingPointIndex),l.set(ct,K))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},et=null,nt={},d={},u=new WeakMap,p=[],g=null,x=!1,m=null,f=null,y=null,v=null,_=null,C=null,S=null,T=new yt(0,0,0),I=0,M=!1,b=null,P=null,L=null,D=null,B=null,Dt.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ot,disable:Q,bindFramebuffer:j,drawBuffers:at,useProgram:zt,setBlending:F,setMaterial:ge,setFlipSided:Ht,setCullFace:Pt,setLineWidth:Et,setPolygonOffset:Yt,setScissorTest:Tt,activeTexture:R,bindTexture:E,unbindTexture:z,compressedTexImage2D:Y,compressedTexImage3D:J,texImage2D:gt,texImage3D:Rt,updateUBOMapping:kt,uniformBlockBinding:Ot,texStorage2D:Gt,texStorage3D:it,texSubImage2D:$,texSubImage3D:St,compressedTexSubImage2D:ht,compressedTexSubImage3D:mt,scissor:It,viewport:xt,reset:ne}}function Gc(i,t,e,n){let s=fg(n);switch(e){case lh:return i*t;case hh:return i*t;case uh:return i*t*2;case fl:return i*t/s.components*s.byteLength;case pl:return i*t/s.components*s.byteLength;case dh:return i*t*2/s.components*s.byteLength;case ml:return i*t*2/s.components*s.byteLength;case ch:return i*t*3/s.components*s.byteLength;case Ve:return i*t*4/s.components*s.byteLength;case gl:return i*t*4/s.components*s.byteLength;case mr:case gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xr:case _r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sa:case oa:return Math.max(i,16)*Math.max(t,8)/4;case ia:case ra:return Math.max(i,8)*Math.max(t,8)/2;case aa:case la:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ua:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case da:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case fa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case pa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ma:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ga:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case xa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case _a:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ya:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case va:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ba:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ma:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ea:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case yr:case Sa:case wa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case fh:case Ta:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Aa:case Ra:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function fg(i){switch(i){case nn:case rh:return{byteLength:1,components:1};case Ms:case oh:case Ps:return{byteLength:2,components:1};case ul:case dl:return{byteLength:2,components:4};case ai:case hl:case un:return{byteLength:4,components:1};case ah:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function pg(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,h=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,E){return p?new OffscreenCanvas(R,E):Mr("canvas")}function x(R,E,z){let Y=1,J=Tt(R);if((J.width>z||J.height>z)&&(Y=z/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let $=Math.floor(Y*J.width),St=Math.floor(Y*J.height);d===void 0&&(d=g($,St));let ht=E?g($,St):d;return ht.width=$,ht.height=St,ht.getContext("2d").drawImage(R,0,0,$,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+$+"x"+St+")."),ht}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function m(R){return R.generateMipmaps}function f(R){i.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(R,E,z,Y,J=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=E;if(E===i.RED&&(z===i.FLOAT&&($=i.R32F),z===i.HALF_FLOAT&&($=i.R16F),z===i.UNSIGNED_BYTE&&($=i.R8)),E===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.R8UI),z===i.UNSIGNED_SHORT&&($=i.R16UI),z===i.UNSIGNED_INT&&($=i.R32UI),z===i.BYTE&&($=i.R8I),z===i.SHORT&&($=i.R16I),z===i.INT&&($=i.R32I)),E===i.RG&&(z===i.FLOAT&&($=i.RG32F),z===i.HALF_FLOAT&&($=i.RG16F),z===i.UNSIGNED_BYTE&&($=i.RG8)),E===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RG8UI),z===i.UNSIGNED_SHORT&&($=i.RG16UI),z===i.UNSIGNED_INT&&($=i.RG32UI),z===i.BYTE&&($=i.RG8I),z===i.SHORT&&($=i.RG16I),z===i.INT&&($=i.RG32I)),E===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGB8UI),z===i.UNSIGNED_SHORT&&($=i.RGB16UI),z===i.UNSIGNED_INT&&($=i.RGB32UI),z===i.BYTE&&($=i.RGB8I),z===i.SHORT&&($=i.RGB16I),z===i.INT&&($=i.RGB32I)),E===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGBA8UI),z===i.UNSIGNED_SHORT&&($=i.RGBA16UI),z===i.UNSIGNED_INT&&($=i.RGBA32UI),z===i.BYTE&&($=i.RGBA8I),z===i.SHORT&&($=i.RGBA16I),z===i.INT&&($=i.RGBA32I)),E===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),E===i.RGBA){let St=J?Vr:Wt.getTransfer(Y);z===i.FLOAT&&($=i.RGBA32F),z===i.HALF_FLOAT&&($=i.RGBA16F),z===i.UNSIGNED_BYTE&&($=St===te?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function _(R,E){let z;return R?E===null||E===ai||E===Xi?z=i.DEPTH24_STENCIL8:E===un?z=i.DEPTH32F_STENCIL8:E===Ms&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ai||E===Xi?z=i.DEPTH_COMPONENT24:E===un?z=i.DEPTH_COMPONENT32F:E===Ms&&(z=i.DEPTH_COMPONENT16),z}function C(R,E){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==ke&&R.minFilter!==He?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function S(R){let E=R.target;E.removeEventListener("dispose",S),I(E),E.isVideoTexture&&h.delete(E)}function T(R){let E=R.target;E.removeEventListener("dispose",T),b(E)}function I(R){let E=n.get(R);if(E.__webglInit===void 0)return;let z=R.source,Y=u.get(z);if(Y){let J=Y[E.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(R),Object.keys(Y).length===0&&u.delete(z)}n.remove(R)}function M(R){let E=n.get(R);i.deleteTexture(E.__webglTexture);let z=R.source,Y=u.get(z);delete Y[E.__cacheKey],o.memory.textures--}function b(R){let E=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(E.__webglFramebuffer[Y]))for(let J=0;J<E.__webglFramebuffer[Y].length;J++)i.deleteFramebuffer(E.__webglFramebuffer[Y][J]);else i.deleteFramebuffer(E.__webglFramebuffer[Y]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[Y])}else{if(Array.isArray(E.__webglFramebuffer))for(let Y=0;Y<E.__webglFramebuffer.length;Y++)i.deleteFramebuffer(E.__webglFramebuffer[Y]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Y=0;Y<E.__webglColorRenderbuffer.length;Y++)E.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[Y]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let z=R.textures;for(let Y=0,J=z.length;Y<J;Y++){let $=n.get(z[Y]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(z[Y])}n.remove(R)}let P=0;function L(){P=0}function D(){let R=P;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),P+=1,R}function B(R){let E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function W(R,E){let z=n.get(R);if(R.isVideoTexture&&Et(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){let Y=R.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(z,R,E);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+E)}function H(R,E){let z=n.get(R);if(R.version>0&&z.__version!==R.version){q(z,R,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+E)}function Z(R,E){let z=n.get(R);if(R.version>0&&z.__version!==R.version){q(z,R,E);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+E)}function V(R,E){let z=n.get(R);if(R.version>0&&z.__version!==R.version){tt(z,R,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+E)}let et={[ea]:i.REPEAT,[oi]:i.CLAMP_TO_EDGE,[na]:i.MIRRORED_REPEAT},nt={[ke]:i.NEAREST,[Ku]:i.NEAREST_MIPMAP_NEAREST,[Os]:i.NEAREST_MIPMAP_LINEAR,[He]:i.LINEAR,[uo]:i.LINEAR_MIPMAP_NEAREST,[hn]:i.LINEAR_MIPMAP_LINEAR},rt={[ed]:i.NEVER,[ad]:i.ALWAYS,[nd]:i.LESS,[mh]:i.LEQUAL,[id]:i.EQUAL,[od]:i.GEQUAL,[sd]:i.GREATER,[rd]:i.NOTEQUAL};function pt(R,E){if(E.type===un&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===He||E.magFilter===uo||E.magFilter===Os||E.magFilter===hn||E.minFilter===He||E.minFilter===uo||E.minFilter===Os||E.minFilter===hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,et[E.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,et[E.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,et[E.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,nt[E.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,nt[E.minFilter]),E.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,rt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ke||E.minFilter!==Os&&E.minFilter!==hn||E.type===un&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Dt(R,E){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",S));let Y=E.source,J=u.get(Y);J===void 0&&(J={},u.set(Y,J));let $=B(E);if($!==R.__cacheKey){J[$]===void 0&&(J[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),J[$].usedTimes++;let St=J[R.__cacheKey];St!==void 0&&(J[R.__cacheKey].usedTimes--,St.usedTimes===0&&M(E)),R.__cacheKey=$,R.__webglTexture=J[$].texture}return z}function q(R,E,z){let Y=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Y=i.TEXTURE_3D);let J=Dt(R,E),$=E.source;e.bindTexture(Y,R.__webglTexture,i.TEXTURE0+z);let St=n.get($);if($.version!==St.__version||J===!0){e.activeTexture(i.TEXTURE0+z);let ht=Wt.getPrimaries(Wt.workingColorSpace),mt=E.colorSpace===zn?null:Wt.getPrimaries(E.colorSpace),Gt=E.colorSpace===zn||ht===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let it=x(E.image,!1,s.maxTextureSize);it=Yt(E,it);let gt=r.convert(E.format,E.colorSpace),Rt=r.convert(E.type),It=v(E.internalFormat,gt,Rt,E.colorSpace,E.isVideoTexture);pt(Y,E);let xt,kt=E.mipmaps,Ot=E.isVideoTexture!==!0,ne=St.__version===void 0||J===!0,U=$.dataReady,ct=C(E,it);if(E.isDepthTexture)It=_(E.format===qi,E.type),ne&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,It,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,It,it.width,it.height,0,gt,Rt,null));else if(E.isDataTexture)if(kt.length>0){Ot&&ne&&e.texStorage2D(i.TEXTURE_2D,ct,It,kt[0].width,kt[0].height);for(let X=0,K=kt.length;X<K;X++)xt=kt[X],Ot?U&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,xt.width,xt.height,gt,Rt,xt.data):e.texImage2D(i.TEXTURE_2D,X,It,xt.width,xt.height,0,gt,Rt,xt.data);E.generateMipmaps=!1}else Ot?(ne&&e.texStorage2D(i.TEXTURE_2D,ct,It,it.width,it.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,gt,Rt,it.data)):e.texImage2D(i.TEXTURE_2D,0,It,it.width,it.height,0,gt,Rt,it.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ot&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,It,kt[0].width,kt[0].height,it.depth);for(let X=0,K=kt.length;X<K;X++)if(xt=kt[X],E.format!==Ve)if(gt!==null)if(Ot){if(U)if(E.layerUpdates.size>0){let ft=Gc(xt.width,xt.height,E.format,E.type);for(let ut of E.layerUpdates){let Ut=xt.data.subarray(ut*ft/xt.data.BYTES_PER_ELEMENT,(ut+1)*ft/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,ut,xt.width,xt.height,1,gt,Ut)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,xt.width,xt.height,it.depth,gt,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,It,xt.width,xt.height,it.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,xt.width,xt.height,it.depth,gt,Rt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,It,xt.width,xt.height,it.depth,0,gt,Rt,xt.data)}else{Ot&&ne&&e.texStorage2D(i.TEXTURE_2D,ct,It,kt[0].width,kt[0].height);for(let X=0,K=kt.length;X<K;X++)xt=kt[X],E.format!==Ve?gt!==null?Ot?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,xt.width,xt.height,gt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,X,It,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?U&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,xt.width,xt.height,gt,Rt,xt.data):e.texImage2D(i.TEXTURE_2D,X,It,xt.width,xt.height,0,gt,Rt,xt.data)}else if(E.isDataArrayTexture)if(Ot){if(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,It,it.width,it.height,it.depth),U)if(E.layerUpdates.size>0){let X=Gc(it.width,it.height,E.format,E.type);for(let K of E.layerUpdates){let ft=it.data.subarray(K*X/it.data.BYTES_PER_ELEMENT,(K+1)*X/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,it.width,it.height,1,gt,Rt,ft)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,gt,Rt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,it.width,it.height,it.depth,0,gt,Rt,it.data);else if(E.isData3DTexture)Ot?(ne&&e.texStorage3D(i.TEXTURE_3D,ct,It,it.width,it.height,it.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,gt,Rt,it.data)):e.texImage3D(i.TEXTURE_3D,0,It,it.width,it.height,it.depth,0,gt,Rt,it.data);else if(E.isFramebufferTexture){if(ne)if(Ot)e.texStorage2D(i.TEXTURE_2D,ct,It,it.width,it.height);else{let X=it.width,K=it.height;for(let ft=0;ft<ct;ft++)e.texImage2D(i.TEXTURE_2D,ft,It,X,K,0,gt,Rt,null),X>>=1,K>>=1}}else if(kt.length>0){if(Ot&&ne){let X=Tt(kt[0]);e.texStorage2D(i.TEXTURE_2D,ct,It,X.width,X.height)}for(let X=0,K=kt.length;X<K;X++)xt=kt[X],Ot?U&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,gt,Rt,xt):e.texImage2D(i.TEXTURE_2D,X,It,gt,Rt,xt);E.generateMipmaps=!1}else if(Ot){if(ne){let X=Tt(it);e.texStorage2D(i.TEXTURE_2D,ct,It,X.width,X.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,Rt,it)}else e.texImage2D(i.TEXTURE_2D,0,It,gt,Rt,it);m(E)&&f(Y),St.__version=$.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function tt(R,E,z){if(E.image.length!==6)return;let Y=Dt(R,E),J=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+z);let $=n.get(J);if(J.version!==$.__version||Y===!0){e.activeTexture(i.TEXTURE0+z);let St=Wt.getPrimaries(Wt.workingColorSpace),ht=E.colorSpace===zn?null:Wt.getPrimaries(E.colorSpace),mt=E.colorSpace===zn||St===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let Gt=E.isCompressedTexture||E.image[0].isCompressedTexture,it=E.image[0]&&E.image[0].isDataTexture,gt=[];for(let K=0;K<6;K++)!Gt&&!it?gt[K]=x(E.image[K],!0,s.maxCubemapSize):gt[K]=it?E.image[K].image:E.image[K],gt[K]=Yt(E,gt[K]);let Rt=gt[0],It=r.convert(E.format,E.colorSpace),xt=r.convert(E.type),kt=v(E.internalFormat,It,xt,E.colorSpace),Ot=E.isVideoTexture!==!0,ne=$.__version===void 0||Y===!0,U=J.dataReady,ct=C(E,Rt);pt(i.TEXTURE_CUBE_MAP,E);let X;if(Gt){Ot&&ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,kt,Rt.width,Rt.height);for(let K=0;K<6;K++){X=gt[K].mipmaps;for(let ft=0;ft<X.length;ft++){let ut=X[ft];E.format!==Ve?It!==null?Ot?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,0,0,ut.width,ut.height,It,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,kt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,0,0,ut.width,ut.height,It,xt,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,kt,ut.width,ut.height,0,It,xt,ut.data)}}}else{if(X=E.mipmaps,Ot&&ne){X.length>0&&ct++;let K=Tt(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,kt,K.width,K.height)}for(let K=0;K<6;K++)if(it){Ot?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,gt[K].width,gt[K].height,It,xt,gt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,kt,gt[K].width,gt[K].height,0,It,xt,gt[K].data);for(let ft=0;ft<X.length;ft++){let Ut=X[ft].image[K].image;Ot?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,0,0,Ut.width,Ut.height,It,xt,Ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,kt,Ut.width,Ut.height,0,It,xt,Ut.data)}}else{Ot?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,It,xt,gt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,kt,It,xt,gt[K]);for(let ft=0;ft<X.length;ft++){let ut=X[ft];Ot?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,0,0,It,xt,ut.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,kt,It,xt,ut.image[K])}}}m(E)&&f(i.TEXTURE_CUBE_MAP),$.__version=J.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function _t(R,E,z,Y,J,$){let St=r.convert(z.format,z.colorSpace),ht=r.convert(z.type),mt=v(z.internalFormat,St,ht,z.colorSpace),Gt=n.get(E),it=n.get(z);if(it.__renderTarget=E,!Gt.__hasExternalTextures){let gt=Math.max(1,E.width>>$),Rt=Math.max(1,E.height>>$);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,$,mt,gt,Rt,E.depth,0,St,ht,null):e.texImage2D(J,$,mt,gt,Rt,0,St,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Pt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,J,it.__webglTexture,0,Ht(E)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,J,it.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(R,E,z){if(i.bindRenderbuffer(i.RENDERBUFFER,R),E.depthBuffer){let Y=E.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,$=_(E.stencilBuffer,J),St=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=Ht(E);Pt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,$,E.width,E.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,$,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,$,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,R)}else{let Y=E.textures;for(let J=0;J<Y.length;J++){let $=Y[J],St=r.convert($.format,$.colorSpace),ht=r.convert($.type),mt=v($.internalFormat,St,ht,$.colorSpace),Gt=Ht(E);z&&Pt(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,mt,E.width,E.height):Pt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt,mt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,mt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Q(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(E.depthTexture);Y.__renderTarget=E,(!Y.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),W(E.depthTexture,0);let J=Y.__webglTexture,$=Ht(E);if(E.depthTexture.format===Bi)Pt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(E.depthTexture.format===qi)Pt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function j(R){let E=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){let Y=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Y){let J=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),E.__depthDisposeCallback=J}E.__boundDepthTexture=Y}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Q(E.__webglFramebuffer,R)}else if(z){E.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[Y]),E.__webglDepthbuffer[Y]===void 0)E.__webglDepthbuffer[Y]=i.createRenderbuffer(),ot(E.__webglDepthbuffer[Y],R,!1);else{let J=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=E.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),ot(E.__webglDepthbuffer,R,!1);else{let Y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(R,E,z){let Y=n.get(R);E!==void 0&&_t(Y.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&j(R)}function zt(R){let E=R.texture,z=n.get(R),Y=n.get(E);R.addEventListener("dispose",T);let J=R.textures,$=R.isWebGLCubeRenderTarget===!0,St=J.length>1;if(St||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=E.version,o.memory.textures++),$){z.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer[ht]=[];for(let mt=0;mt<E.mipmaps.length;mt++)z.__webglFramebuffer[ht][mt]=i.createFramebuffer()}else z.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer=[];for(let ht=0;ht<E.mipmaps.length;ht++)z.__webglFramebuffer[ht]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(St)for(let ht=0,mt=J.length;ht<mt;ht++){let Gt=n.get(J[ht]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Pt(R)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ht=0;ht<J.length;ht++){let mt=J[ht];z.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ht]);let Gt=r.convert(mt.format,mt.colorSpace),it=r.convert(mt.type),gt=v(mt.internalFormat,Gt,it,mt.colorSpace,R.isXRRenderTarget===!0),Rt=Ht(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,gt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,z.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),pt(i.TEXTURE_CUBE_MAP,E);for(let ht=0;ht<6;ht++)if(E.mipmaps&&E.mipmaps.length>0)for(let mt=0;mt<E.mipmaps.length;mt++)_t(z.__webglFramebuffer[ht][mt],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,mt);else _t(z.__webglFramebuffer[ht],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(E)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let ht=0,mt=J.length;ht<mt;ht++){let Gt=J[ht],it=n.get(Gt);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),pt(i.TEXTURE_2D,Gt),_t(z.__webglFramebuffer,R,Gt,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,0),m(Gt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ht=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,Y.__webglTexture),pt(ht,E),E.mipmaps&&E.mipmaps.length>0)for(let mt=0;mt<E.mipmaps.length;mt++)_t(z.__webglFramebuffer[mt],R,E,i.COLOR_ATTACHMENT0,ht,mt);else _t(z.__webglFramebuffer,R,E,i.COLOR_ATTACHMENT0,ht,0);m(E)&&f(ht),e.unbindTexture()}R.depthBuffer&&j(R)}function Ct(R){let E=R.textures;for(let z=0,Y=E.length;z<Y;z++){let J=E[z];if(m(J)){let $=y(R),St=n.get(J).__webglTexture;e.bindTexture($,St),f($),e.unbindTexture()}}}let jt=[],F=[];function ge(R){if(R.samples>0){if(Pt(R)===!1){let E=R.textures,z=R.width,Y=R.height,J=i.COLOR_BUFFER_BIT,$=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(R),ht=E.length>1;if(ht)for(let mt=0;mt<E.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let mt=0;mt<E.length;mt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[mt]);let Gt=n.get(E[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,z,Y,0,0,z,Y,J,i.NEAREST),l===!0&&(jt.length=0,F.length=0,jt.push(i.COLOR_ATTACHMENT0+mt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(jt.push($),F.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,jt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let mt=0;mt<E.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,St.__webglColorRenderbuffer[mt]);let Gt=n.get(E[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let E=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Ht(R){return Math.min(s.maxSamples,R.samples)}function Pt(R){let E=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Et(R){let E=o.render.frame;h.get(R)!==E&&(h.set(R,E),R.update())}function Yt(R,E){let z=R.colorSpace,Y=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Qi&&z!==zn&&(Wt.getTransfer(z)===te?(Y!==Ve||J!==nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),E}function Tt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=L,this.setTexture2D=W,this.setTexture2DArray=H,this.setTexture3D=Z,this.setTextureCube=V,this.rebindTextures=at,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Pt}function mg(i,t){function e(n,s=zn){let r,o=Wt.getTransfer(s);if(n===nn)return i.UNSIGNED_BYTE;if(n===ul)return i.UNSIGNED_SHORT_4_4_4_4;if(n===dl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ah)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===rh)return i.BYTE;if(n===oh)return i.SHORT;if(n===Ms)return i.UNSIGNED_SHORT;if(n===hl)return i.INT;if(n===ai)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===Ps)return i.HALF_FLOAT;if(n===lh)return i.ALPHA;if(n===ch)return i.RGB;if(n===Ve)return i.RGBA;if(n===hh)return i.LUMINANCE;if(n===uh)return i.LUMINANCE_ALPHA;if(n===Bi)return i.DEPTH_COMPONENT;if(n===qi)return i.DEPTH_STENCIL;if(n===fl)return i.RED;if(n===pl)return i.RED_INTEGER;if(n===dh)return i.RG;if(n===ml)return i.RG_INTEGER;if(n===gl)return i.RGBA_INTEGER;if(n===mr||n===gr||n===xr||n===_r)if(o===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===mr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===mr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ia||n===sa||n===ra||n===oa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ia)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ra)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===aa||n===la||n===ca)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===aa||n===la)return o===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ca)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===xa||n===_a||n===ya||n===va||n===ba||n===Ma||n===Ea)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ha)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ua)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===da)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ma)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ga)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_a)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ya)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===va)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ba)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ma)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ea)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yr||n===Sa||n===wa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===yr)return o===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fh||n===Ta||n===Aa||n===Ra)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===yr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ta)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ra)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Wa=class extends Re{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},re=class extends ue{constructor(){super(),this.isGroup=!0,this.type="Group"}},gg={type:"move"},bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},xg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_g=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Xa=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ue,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Se({vertexShader:xg,fragmentShader:_g,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new se(new Zi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},qa=class extends An{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null,x=new Xa,m=e.getContextAttributes(),f=null,y=null,v=[],_=[],C=new At,S=null,T=new Re;T.viewport=new fe;let I=new Re;I.viewport=new fe;let M=[T,I],b=new Wa,P=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let tt=v[q];return tt===void 0&&(tt=new bs,v[q]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(q){let tt=v[q];return tt===void 0&&(tt=new bs,v[q]=tt),tt.getGripSpace()},this.getHand=function(q){let tt=v[q];return tt===void 0&&(tt=new bs,v[q]=tt),tt.getHandSpace()};function D(q){let tt=_.indexOf(q.inputSource);if(tt===-1)return;let _t=v[tt];_t!==void 0&&(_t.update(q.inputSource,q.frame,c||o),_t.dispatchEvent({type:q.type,data:q.inputSource}))}function B(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",W);for(let q=0;q<v.length;q++){let tt=_[q];tt!==null&&(_[q]=null,v[q].disconnect(tt))}P=null,L=null,x.reset(),t.setRenderTarget(f),p=null,u=null,d=null,s=null,y=null,Dt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",B),s.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){let tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new sn(p.framebufferWidth,p.framebufferHeight,{format:Ve,type:nn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,_t=null,ot=null;m.depth&&(ot=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?qi:Bi,_t=m.stencil?Xi:ai);let Q={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(Q),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new sn(u.textureWidth,u.textureHeight,{format:Ve,type:nn,depthTexture:new Pr(u.textureWidth,u.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Dt.setContext(s),Dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function W(q){for(let tt=0;tt<q.removed.length;tt++){let _t=q.removed[tt],ot=_.indexOf(_t);ot>=0&&(_[ot]=null,v[ot].disconnect(_t))}for(let tt=0;tt<q.added.length;tt++){let _t=q.added[tt],ot=_.indexOf(_t);if(ot===-1){for(let j=0;j<v.length;j++)if(j>=_.length){_.push(_t),ot=j;break}else if(_[j]===null){_[j]=_t,ot=j;break}if(ot===-1)break}let Q=v[ot];Q&&Q.connect(_t)}}let H=new A,Z=new A;function V(q,tt,_t){H.setFromMatrixPosition(tt.matrixWorld),Z.setFromMatrixPosition(_t.matrixWorld);let ot=H.distanceTo(Z),Q=tt.projectionMatrix.elements,j=_t.projectionMatrix.elements,at=Q[14]/(Q[10]-1),zt=Q[14]/(Q[10]+1),Ct=(Q[9]+1)/Q[5],jt=(Q[9]-1)/Q[5],F=(Q[8]-1)/Q[0],ge=(j[8]+1)/j[0],Ht=at*F,Pt=at*ge,Et=ot/(-F+ge),Yt=Et*-F;if(tt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Yt),q.translateZ(Et),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Q[10]===-1)q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let Tt=at+Et,R=zt+Et,E=Ht-Yt,z=Pt+(ot-Yt),Y=Ct*zt/R*Tt,J=jt*zt/R*Tt;q.projectionMatrix.makePerspective(E,z,Y,J,Tt,R),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function et(q,tt){tt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(tt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let tt=q.near,_t=q.far;x.texture!==null&&(x.depthNear>0&&(tt=x.depthNear),x.depthFar>0&&(_t=x.depthFar)),b.near=I.near=T.near=tt,b.far=I.far=T.far=_t,(P!==b.near||L!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,L=b.far),T.layers.mask=q.layers.mask|2,I.layers.mask=q.layers.mask|4,b.layers.mask=T.layers.mask|I.layers.mask;let ot=q.parent,Q=b.cameras;et(b,ot);for(let j=0;j<Q.length;j++)et(Q[j],ot);Q.length===2?V(b,T,I):b.projectionMatrix.copy(T.projectionMatrix),nt(q,b,ot)};function nt(q,tt,_t){_t===null?q.matrix.copy(tt.matrixWorld):(q.matrix.copy(_t.matrixWorld),q.matrix.invert(),q.matrix.multiply(tt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Es*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let rt=null;function pt(q,tt){if(h=tt.getViewerPose(c||o),g=tt,h!==null){let _t=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let ot=!1;_t.length!==b.cameras.length&&(b.cameras.length=0,ot=!0);for(let j=0;j<_t.length;j++){let at=_t[j],zt=null;if(p!==null)zt=p.getViewport(at);else{let jt=d.getViewSubImage(u,at);zt=jt.viewport,j===0&&(t.setRenderTargetTextures(y,jt.colorTexture,u.ignoreDepthValues?void 0:jt.depthStencilTexture),t.setRenderTarget(y))}let Ct=M[j];Ct===void 0&&(Ct=new Re,Ct.layers.enable(j),Ct.viewport=new fe,M[j]=Ct),Ct.matrix.fromArray(at.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(at.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set(zt.x,zt.y,zt.width,zt.height),j===0&&(b.matrix.copy(Ct.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ot===!0&&b.cameras.push(Ct)}let Q=s.enabledFeatures;if(Q&&Q.includes("depth-sensing")){let j=d.getDepthInformation(_t[0]);j&&j.isValid&&j.texture&&x.init(t,j,s.renderState)}}for(let _t=0;_t<v.length;_t++){let ot=_[_t],Q=v[_t];ot!==null&&Q!==void 0&&Q.update(ot,tt,c||o)}rt&&rt(q,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}let Dt=new vh;Dt.setAnimationLoop(pt),this.setAnimationLoop=function(q){rt=q},this.dispose=function(){}}},ni=new dn,yg=new Vt;function vg(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,yh(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,y,v,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,y,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===De&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===De&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let y=t.get(f),v=y.envMap,_=y.envMapRotation;v&&(m.envMap.value=v,ni.copy(_),ni.x*=-1,ni.y*=-1,ni.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),m.envMapRotation.value.setFromMatrix4(yg.makeRotationFromEuler(ni)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=v*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===De&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let y=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function bg(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){let _=v.program;n.uniformBlockBinding(y,_)}function c(y,v){let _=s[y.id];_===void 0&&(g(y),_=h(y),s[y.id]=_,y.addEventListener("dispose",m));let C=v.program;n.updateUBOMapping(y,C);let S=t.render.frame;r[y.id]!==S&&(u(y),r[y.id]=S)}function h(y){let v=d();y.__bindingPointIndex=v;let _=i.createBuffer(),C=y.__size,S=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,C,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,_),_}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let v=s[y.id],_=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let S=0,T=_.length;S<T;S++){let I=Array.isArray(_[S])?_[S]:[_[S]];for(let M=0,b=I.length;M<b;M++){let P=I[M];if(p(P,S,M,C)===!0){let L=P.__offset,D=Array.isArray(P.value)?P.value:[P.value],B=0;for(let W=0;W<D.length;W++){let H=D[W],Z=x(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,L+B,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,B),B+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,v,_,C){let S=y.value,T=v+"_"+_;if(C[T]===void 0)return typeof S=="number"||typeof S=="boolean"?C[T]=S:C[T]=S.clone(),!0;{let I=C[T];if(typeof S=="number"||typeof S=="boolean"){if(I!==S)return C[T]=S,!0}else if(I.equals(S)===!1)return I.copy(S),!0}return!1}function g(y){let v=y.uniforms,_=0,C=16;for(let T=0,I=v.length;T<I;T++){let M=Array.isArray(v[T])?v[T]:[v[T]];for(let b=0,P=M.length;b<P;b++){let L=M[b],D=Array.isArray(L.value)?L.value:[L.value];for(let B=0,W=D.length;B<W;B++){let H=D[B],Z=x(H),V=_%C,et=V%Z.boundary,nt=V+et;_+=et,nt!==0&&C-nt<Z.storage&&(_+=C-nt),L.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=_,_+=Z.storage}}}let S=_%C;return S>0&&(_+=C-S),y.__size=_,y.__cache={},this}function x(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){let v=y.target;v.removeEventListener("dispose",m);let _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Ir=class{constructor(t={}){let{canvas:e=Sd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,f=null,y=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xe,this.toneMapping=Vn,this.toneMappingExposure=1;let _=this,C=!1,S=0,T=0,I=null,M=-1,b=null,P=new fe,L=new fe,D=null,B=new yt(0),W=0,H=e.width,Z=e.height,V=1,et=null,nt=null,rt=new fe(0,0,H,Z),pt=new fe(0,0,H,Z),Dt=!1,q=new Ts,tt=!1,_t=!1,ot=new Vt,Q=new Vt,j=new A,at=new fe,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ct=!1;function jt(){return I===null?V:1}let F=n;function ge(w,N){return e.getContext(w,N)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ll}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ut,!1),F===null){let N="webgl2";if(F=ge(N,w),F===null)throw ge(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ht,Pt,Et,Yt,Tt,R,E,z,Y,J,$,St,ht,mt,Gt,it,gt,Rt,It,xt,kt,Ot,ne,U;function ct(){Ht=new Om(F),Ht.init(),Ot=new mg(F,Ht),Pt=new Im(F,Ht,t,Ot),Et=new dg(F,Ht),Pt.reverseDepthBuffer&&u&&Et.buffers.depth.setReversed(!0),Yt=new Hm(F),Tt=new Q0,R=new pg(F,Ht,Et,Tt,Pt,Ot,Yt),E=new Dm(_),z=new Nm(_),Y=new qd(F),ne=new Cm(F,Y),J=new Bm(F,Y,Yt,ne),$=new km(F,J,Y,Yt),It=new Vm(F,Pt,R),it=new Lm(Tt),St=new J0(_,E,z,Ht,Pt,ne,it),ht=new vg(_,Tt),mt=new eg,Gt=new ag(Ht),Rt=new Rm(_,E,z,Et,$,p,l),gt=new hg(_,$,Pt),U=new bg(F,Yt,Pt,Et),xt=new Pm(F,Ht,Yt),kt=new zm(F,Ht,Yt),Yt.programs=St.programs,_.capabilities=Pt,_.extensions=Ht,_.properties=Tt,_.renderLists=mt,_.shadowMap=gt,_.state=Et,_.info=Yt}ct();let X=new qa(_,F);this.xr=X,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let w=Ht.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ht.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(w){w!==void 0&&(V=w,this.setSize(H,Z,!1))},this.getSize=function(w){return w.set(H,Z)},this.setSize=function(w,N,k=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=w,Z=N,e.width=Math.floor(w*V),e.height=Math.floor(N*V),k===!0&&(e.style.width=w+"px",e.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(H*V,Z*V).floor()},this.setDrawingBufferSize=function(w,N,k){H=w,Z=N,V=k,e.width=Math.floor(w*k),e.height=Math.floor(N*k),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(rt)},this.setViewport=function(w,N,k,G){w.isVector4?rt.set(w.x,w.y,w.z,w.w):rt.set(w,N,k,G),Et.viewport(P.copy(rt).multiplyScalar(V).round())},this.getScissor=function(w){return w.copy(pt)},this.setScissor=function(w,N,k,G){w.isVector4?pt.set(w.x,w.y,w.z,w.w):pt.set(w,N,k,G),Et.scissor(L.copy(pt).multiplyScalar(V).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(w){Et.setScissorTest(Dt=w)},this.setOpaqueSort=function(w){et=w},this.setTransparentSort=function(w){nt=w},this.getClearColor=function(w){return w.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(w=!0,N=!0,k=!0){let G=0;if(w){let O=!1;if(I!==null){let st=I.texture.format;O=st===gl||st===ml||st===pl}if(O){let st=I.texture.type,dt=st===nn||st===ai||st===Ms||st===Xi||st===ul||st===dl,vt=Rt.getClearColor(),bt=Rt.getClearAlpha(),Lt=vt.r,Ft=vt.g,Mt=vt.b;dt?(g[0]=Lt,g[1]=Ft,g[2]=Mt,g[3]=bt,F.clearBufferuiv(F.COLOR,0,g)):(x[0]=Lt,x[1]=Ft,x[2]=Mt,x[3]=bt,F.clearBufferiv(F.COLOR,0,x))}else G|=F.COLOR_BUFFER_BIT}N&&(G|=F.DEPTH_BUFFER_BIT),k&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),mt.dispose(),Gt.dispose(),Tt.dispose(),E.dispose(),z.dispose(),$.dispose(),ne.dispose(),U.dispose(),St.dispose(),X.dispose(),X.removeEventListener("sessionstart",Ol),X.removeEventListener("sessionend",Bl),jn.stop()};function K(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let w=Yt.autoReset,N=gt.enabled,k=gt.autoUpdate,G=gt.needsUpdate,O=gt.type;ct(),Yt.autoReset=w,gt.enabled=N,gt.autoUpdate=k,gt.needsUpdate=G,gt.type=O}function ut(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ut(w){let N=w.target;N.removeEventListener("dispose",Ut),de(N)}function de(w){we(w),Tt.remove(w)}function we(w){let N=Tt.get(w).programs;N!==void 0&&(N.forEach(function(k){St.releaseProgram(k)}),w.isShaderMaterial&&St.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,k,G,O,st){N===null&&(N=zt);let dt=O.isMesh&&O.matrixWorld.determinant()<0,vt=_u(w,N,k,G,O);Et.setMaterial(G,dt);let bt=k.index,Lt=1;if(G.wireframe===!0){if(bt=J.getWireframeAttribute(k),bt===void 0)return;Lt=2}let Ft=k.drawRange,Mt=k.attributes.position,Xt=Ft.start*Lt,ie=(Ft.start+Ft.count)*Lt;st!==null&&(Xt=Math.max(Xt,st.start*Lt),ie=Math.min(ie,(st.start+st.count)*Lt)),bt!==null?(Xt=Math.max(Xt,0),ie=Math.min(ie,bt.count)):Mt!=null&&(Xt=Math.max(Xt,0),ie=Math.min(ie,Mt.count));let ae=ie-Xt;if(ae<0||ae===1/0)return;ne.setup(O,G,vt,k,bt);let Ie,Zt=xt;if(bt!==null&&(Ie=Y.get(bt),Zt=kt,Zt.setIndex(Ie)),O.isMesh)G.wireframe===!0?(Et.setLineWidth(G.wireframeLinewidth*jt()),Zt.setMode(F.LINES)):Zt.setMode(F.TRIANGLES);else if(O.isLine){let wt=G.linewidth;wt===void 0&&(wt=1),Et.setLineWidth(wt*jt()),O.isLineSegments?Zt.setMode(F.LINES):O.isLineLoop?Zt.setMode(F.LINE_LOOP):Zt.setMode(F.LINE_STRIP)}else O.isPoints?Zt.setMode(F.POINTS):O.isSprite&&Zt.setMode(F.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Zt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))Zt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let wt=O._multiDrawStarts,gn=O._multiDrawCounts,$t=O._multiDrawCount,je=bt?Y.get(bt).bytesPerElement:1,gi=Tt.get(G).currentProgram.getUniforms();for(let Ne=0;Ne<$t;Ne++)gi.setValue(F,"_gl_DrawID",Ne),Zt.render(wt[Ne]/je,gn[Ne])}else if(O.isInstancedMesh)Zt.renderInstances(Xt,ae,O.count);else if(k.isInstancedBufferGeometry){let wt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,gn=Math.min(k.instanceCount,wt);Zt.renderInstances(Xt,ae,gn)}else Zt.render(Xt,ae)};function Kt(w,N,k){w.transparent===!0&&w.side===Le&&w.forceSinglePass===!1?(w.side=De,w.needsUpdate=!0,Ns(w,N,k),w.side=kn,w.needsUpdate=!0,Ns(w,N,k),w.side=Le):Ns(w,N,k)}this.compile=function(w,N,k=null){k===null&&(k=w),f=Gt.get(k),f.init(N),v.push(f),k.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),w!==k&&w.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights();let G=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let st=O.material;if(st)if(Array.isArray(st))for(let dt=0;dt<st.length;dt++){let vt=st[dt];Kt(vt,k,O),G.add(vt)}else Kt(st,k,O),G.add(st)}),v.pop(),f=null,G},this.compileAsync=function(w,N,k=null){let G=this.compile(w,N,k);return new Promise(O=>{function st(){if(G.forEach(function(dt){Tt.get(dt).currentProgram.isReady()&&G.delete(dt)}),G.size===0){O(w);return}setTimeout(st,10)}Ht.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let $e=null;function mn(w){$e&&$e(w)}function Ol(){jn.stop()}function Bl(){jn.start()}let jn=new vh;jn.setAnimationLoop(mn),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(w){$e=w,X.setAnimationLoop(w),w===null?jn.stop():jn.start()},X.addEventListener("sessionstart",Ol),X.addEventListener("sessionend",Bl),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(N),N=X.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,N,I),f=Gt.get(w,v.length),f.init(N),v.push(f),Q.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),q.setFromProjectionMatrix(Q),_t=this.localClippingEnabled,tt=it.init(this.clippingPlanes,_t),m=mt.get(w,y.length),m.init(),y.push(m),X.enabled===!0&&X.isPresenting===!0){let st=_.xr.getDepthSensingMesh();st!==null&&ho(st,N,-1/0,_.sortObjects)}ho(w,N,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(et,nt),Ct=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Ct&&Rt.addToRenderList(m,w),this.info.render.frame++,tt===!0&&it.beginShadows();let k=f.state.shadowsArray;gt.render(k,w,N),tt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=m.opaque,O=m.transmissive;if(f.setupLights(),N.isArrayCamera){let st=N.cameras;if(O.length>0)for(let dt=0,vt=st.length;dt<vt;dt++){let bt=st[dt];Hl(G,O,w,bt)}Ct&&Rt.render(w);for(let dt=0,vt=st.length;dt<vt;dt++){let bt=st[dt];zl(m,w,bt,bt.viewport)}}else O.length>0&&Hl(G,O,w,N),Ct&&Rt.render(w),zl(m,w,N);I!==null&&(R.updateMultisampleRenderTarget(I),R.updateRenderTargetMipmap(I)),w.isScene===!0&&w.onAfterRender(_,w,N),ne.resetDefaultState(),M=-1,b=null,v.pop(),v.length>0?(f=v[v.length-1],tt===!0&&it.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function ho(w,N,k,G){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)k=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||q.intersectsSprite(w)){G&&at.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Q);let dt=$.update(w),vt=w.material;vt.visible&&m.push(w,dt,vt,k,at.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||q.intersectsObject(w))){let dt=$.update(w),vt=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),at.copy(w.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),at.copy(dt.boundingSphere.center)),at.applyMatrix4(w.matrixWorld).applyMatrix4(Q)),Array.isArray(vt)){let bt=dt.groups;for(let Lt=0,Ft=bt.length;Lt<Ft;Lt++){let Mt=bt[Lt],Xt=vt[Mt.materialIndex];Xt&&Xt.visible&&m.push(w,dt,Xt,k,at.z,Mt)}}else vt.visible&&m.push(w,dt,vt,k,at.z,null)}}let st=w.children;for(let dt=0,vt=st.length;dt<vt;dt++)ho(st[dt],N,k,G)}function zl(w,N,k,G){let O=w.opaque,st=w.transmissive,dt=w.transparent;f.setupLightsView(k),tt===!0&&it.setGlobalState(_.clippingPlanes,k),G&&Et.viewport(P.copy(G)),O.length>0&&Fs(O,N,k),st.length>0&&Fs(st,N,k),dt.length>0&&Fs(dt,N,k),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function Hl(w,N,k,G){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[G.id]===void 0&&(f.state.transmissionRenderTarget[G.id]=new sn(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?Ps:nn,minFilter:hn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));let st=f.state.transmissionRenderTarget[G.id],dt=G.viewport||P;st.setSize(dt.z,dt.w);let vt=_.getRenderTarget();_.setRenderTarget(st),_.getClearColor(B),W=_.getClearAlpha(),W<1&&_.setClearColor(16777215,.5),_.clear(),Ct&&Rt.render(k);let bt=_.toneMapping;_.toneMapping=Vn;let Lt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),f.setupLightsView(G),tt===!0&&it.setGlobalState(_.clippingPlanes,G),Fs(w,k,G),R.updateMultisampleRenderTarget(st),R.updateRenderTargetMipmap(st),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let Mt=0,Xt=N.length;Mt<Xt;Mt++){let ie=N[Mt],ae=ie.object,Ie=ie.geometry,Zt=ie.material,wt=ie.group;if(Zt.side===Le&&ae.layers.test(G.layers)){let gn=Zt.side;Zt.side=De,Zt.needsUpdate=!0,Vl(ae,k,G,Ie,Zt,wt),Zt.side=gn,Zt.needsUpdate=!0,Ft=!0}}Ft===!0&&(R.updateMultisampleRenderTarget(st),R.updateRenderTargetMipmap(st))}_.setRenderTarget(vt),_.setClearColor(B,W),Lt!==void 0&&(G.viewport=Lt),_.toneMapping=bt}function Fs(w,N,k){let G=N.isScene===!0?N.overrideMaterial:null;for(let O=0,st=w.length;O<st;O++){let dt=w[O],vt=dt.object,bt=dt.geometry,Lt=G===null?dt.material:G,Ft=dt.group;vt.layers.test(k.layers)&&Vl(vt,N,k,bt,Lt,Ft)}}function Vl(w,N,k,G,O,st){w.onBeforeRender(_,N,k,G,O,st),w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(_,N,k,G,w,st),O.transparent===!0&&O.side===Le&&O.forceSinglePass===!1?(O.side=De,O.needsUpdate=!0,_.renderBufferDirect(k,N,G,O,w,st),O.side=kn,O.needsUpdate=!0,_.renderBufferDirect(k,N,G,O,w,st),O.side=Le):_.renderBufferDirect(k,N,G,O,w,st),w.onAfterRender(_,N,k,G,O,st)}function Ns(w,N,k){N.isScene!==!0&&(N=zt);let G=Tt.get(w),O=f.state.lights,st=f.state.shadowsArray,dt=O.state.version,vt=St.getParameters(w,O.state,st,N,k),bt=St.getProgramCacheKey(vt),Lt=G.programs;G.environment=w.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(w.isMeshStandardMaterial?z:E).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Lt===void 0&&(w.addEventListener("dispose",Ut),Lt=new Map,G.programs=Lt);let Ft=Lt.get(bt);if(Ft!==void 0){if(G.currentProgram===Ft&&G.lightsStateVersion===dt)return Gl(w,vt),Ft}else vt.uniforms=St.getUniforms(w),w.onBeforeCompile(vt,_),Ft=St.acquireProgram(vt,bt),Lt.set(bt,Ft),G.uniforms=vt.uniforms;let Mt=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Mt.clippingPlanes=it.uniform),Gl(w,vt),G.needsLights=vu(w),G.lightsStateVersion=dt,G.needsLights&&(Mt.ambientLightColor.value=O.state.ambient,Mt.lightProbe.value=O.state.probe,Mt.directionalLights.value=O.state.directional,Mt.directionalLightShadows.value=O.state.directionalShadow,Mt.spotLights.value=O.state.spot,Mt.spotLightShadows.value=O.state.spotShadow,Mt.rectAreaLights.value=O.state.rectArea,Mt.ltc_1.value=O.state.rectAreaLTC1,Mt.ltc_2.value=O.state.rectAreaLTC2,Mt.pointLights.value=O.state.point,Mt.pointLightShadows.value=O.state.pointShadow,Mt.hemisphereLights.value=O.state.hemi,Mt.directionalShadowMap.value=O.state.directionalShadowMap,Mt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Mt.spotShadowMap.value=O.state.spotShadowMap,Mt.spotLightMatrix.value=O.state.spotLightMatrix,Mt.spotLightMap.value=O.state.spotLightMap,Mt.pointShadowMap.value=O.state.pointShadowMap,Mt.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=Ft,G.uniformsList=null,Ft}function kl(w){if(w.uniformsList===null){let N=w.currentProgram.getUniforms();w.uniformsList=Vi.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function Gl(w,N){let k=Tt.get(w);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.batchingColor=N.batchingColor,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function _u(w,N,k,G,O){N.isScene!==!0&&(N=zt),R.resetTextureUnits();let st=N.fog,dt=G.isMeshStandardMaterial?N.environment:null,vt=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Qi,bt=(G.isMeshStandardMaterial?z:E).get(G.envMap||dt),Lt=G.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ft=!!k.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Mt=!!k.morphAttributes.position,Xt=!!k.morphAttributes.normal,ie=!!k.morphAttributes.color,ae=Vn;G.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ae=_.toneMapping);let Ie=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Zt=Ie!==void 0?Ie.length:0,wt=Tt.get(G),gn=f.state.lights;if(tt===!0&&(_t===!0||w!==b)){let Ge=w===b&&G.id===M;it.setState(G,w,Ge)}let $t=!1;G.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==gn.state.version||wt.outputColorSpace!==vt||O.isBatchedMesh&&wt.batching===!1||!O.isBatchedMesh&&wt.batching===!0||O.isBatchedMesh&&wt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&wt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&wt.instancing===!1||!O.isInstancedMesh&&wt.instancing===!0||O.isSkinnedMesh&&wt.skinning===!1||!O.isSkinnedMesh&&wt.skinning===!0||O.isInstancedMesh&&wt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&wt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&wt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&wt.instancingMorph===!1&&O.morphTexture!==null||wt.envMap!==bt||G.fog===!0&&wt.fog!==st||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==it.numPlanes||wt.numIntersection!==it.numIntersection)||wt.vertexAlphas!==Lt||wt.vertexTangents!==Ft||wt.morphTargets!==Mt||wt.morphNormals!==Xt||wt.morphColors!==ie||wt.toneMapping!==ae||wt.morphTargetsCount!==Zt)&&($t=!0):($t=!0,wt.__version=G.version);let je=wt.currentProgram;$t===!0&&(je=Ns(G,N,O));let gi=!1,Ne=!1,os=!1,le=je.getUniforms(),ln=wt.uniforms;if(Et.useProgram(je.program)&&(gi=!0,Ne=!0,os=!0),G.id!==M&&(M=G.id,Ne=!0),gi||b!==w){Et.buffers.depth.getReversed()?(ot.copy(w.projectionMatrix),Td(ot),Ad(ot),le.setValue(F,"projectionMatrix",ot)):le.setValue(F,"projectionMatrix",w.projectionMatrix),le.setValue(F,"viewMatrix",w.matrixWorldInverse);let In=le.map.cameraPosition;In!==void 0&&In.setValue(F,j.setFromMatrixPosition(w.matrixWorld)),Pt.logarithmicDepthBuffer&&le.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&le.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),b!==w&&(b=w,Ne=!0,os=!0)}if(O.isSkinnedMesh){le.setOptional(F,O,"bindMatrix"),le.setOptional(F,O,"bindMatrixInverse");let Ge=O.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),le.setValue(F,"boneTexture",Ge.boneTexture,R))}O.isBatchedMesh&&(le.setOptional(F,O,"batchingTexture"),le.setValue(F,"batchingTexture",O._matricesTexture,R),le.setOptional(F,O,"batchingIdTexture"),le.setValue(F,"batchingIdTexture",O._indirectTexture,R),le.setOptional(F,O,"batchingColorTexture"),O._colorsTexture!==null&&le.setValue(F,"batchingColorTexture",O._colorsTexture,R));let as=k.morphAttributes;if((as.position!==void 0||as.normal!==void 0||as.color!==void 0)&&It.update(O,k,je),(Ne||wt.receiveShadow!==O.receiveShadow)&&(wt.receiveShadow=O.receiveShadow,le.setValue(F,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(ln.envMap.value=bt,ln.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(ln.envMapIntensity.value=N.environmentIntensity),Ne&&(le.setValue(F,"toneMappingExposure",_.toneMappingExposure),wt.needsLights&&yu(ln,os),st&&G.fog===!0&&ht.refreshFogUniforms(ln,st),ht.refreshMaterialUniforms(ln,G,V,Z,f.state.transmissionRenderTarget[w.id]),Vi.upload(F,kl(wt),ln,R)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Vi.upload(F,kl(wt),ln,R),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&le.setValue(F,"center",O.center),le.setValue(F,"modelViewMatrix",O.modelViewMatrix),le.setValue(F,"normalMatrix",O.normalMatrix),le.setValue(F,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let Ge=G.uniformsGroups;for(let In=0,Ln=Ge.length;In<Ln;In++){let Wl=Ge[In];U.update(Wl,je),U.bind(Wl,je)}}return je}function yu(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function vu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,N,k){Tt.get(w.texture).__webglTexture=N,Tt.get(w.depthTexture).__webglTexture=k;let G=Tt.get(w);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=k===void 0,G.__autoAllocateDepthBuffer||Ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){let k=Tt.get(w);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,k=0){I=w,S=N,T=k;let G=!0,O=null,st=!1,dt=!1;if(w){let bt=Tt.get(w);if(bt.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(F.FRAMEBUFFER,null),G=!1;else if(bt.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(bt.__hasExternalTextures)R.rebindTextures(w,Tt.get(w.texture).__webglTexture,Tt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Mt=w.depthTexture;if(bt.__boundDepthTexture!==Mt){if(Mt!==null&&Tt.has(Mt)&&(w.width!==Mt.image.width||w.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}let Lt=w.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(dt=!0);let Ft=Tt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ft[N])?O=Ft[N][k]:O=Ft[N],st=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?O=Tt.get(w).__webglMultisampledFramebuffer:Array.isArray(Ft)?O=Ft[k]:O=Ft,P.copy(w.viewport),L.copy(w.scissor),D=w.scissorTest}else P.copy(rt).multiplyScalar(V).floor(),L.copy(pt).multiplyScalar(V).floor(),D=Dt;if(Et.bindFramebuffer(F.FRAMEBUFFER,O)&&G&&Et.drawBuffers(w,O),Et.viewport(P),Et.scissor(L),Et.setScissorTest(D),st){let bt=Tt.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,bt.__webglTexture,k)}else if(dt){let bt=Tt.get(w.texture),Lt=N||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,bt.__webglTexture,k||0,Lt)}M=-1},this.readRenderTargetPixels=function(w,N,k,G,O,st,dt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&dt!==void 0&&(vt=vt[dt]),vt){Et.bindFramebuffer(F.FRAMEBUFFER,vt);try{let bt=w.texture,Lt=bt.format,Ft=bt.type;if(!Pt.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-G&&k>=0&&k<=w.height-O&&F.readPixels(N,k,G,O,Ot.convert(Lt),Ot.convert(Ft),st)}finally{let bt=I!==null?Tt.get(I).__webglFramebuffer:null;Et.bindFramebuffer(F.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(w,N,k,G,O,st,dt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=Tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&dt!==void 0&&(vt=vt[dt]),vt){let bt=w.texture,Lt=bt.format,Ft=bt.type;if(!Pt.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-G&&k>=0&&k<=w.height-O){Et.bindFramebuffer(F.FRAMEBUFFER,vt);let Mt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Mt),F.bufferData(F.PIXEL_PACK_BUFFER,st.byteLength,F.STREAM_READ),F.readPixels(N,k,G,O,Ot.convert(Lt),Ot.convert(Ft),0);let Xt=I!==null?Tt.get(I).__webglFramebuffer:null;Et.bindFramebuffer(F.FRAMEBUFFER,Xt);let ie=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await wd(F,ie,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Mt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,st),F.deleteBuffer(Mt),F.deleteSync(ie),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,N=null,k=0){w.isTexture!==!0&&(_s("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);let G=Math.pow(2,-k),O=Math.floor(w.image.width*G),st=Math.floor(w.image.height*G),dt=N!==null?N.x:0,vt=N!==null?N.y:0;R.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,k,0,0,dt,vt,O,st),Et.unbindTexture()},this.copyTextureToTexture=function(w,N,k=null,G=null,O=0){w.isTexture!==!0&&(_s("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,w=arguments[1],N=arguments[2],O=arguments[3]||0,k=null);let st,dt,vt,bt,Lt,Ft,Mt,Xt,ie,ae=w.isCompressedTexture?w.mipmaps[O]:w.image;k!==null?(st=k.max.x-k.min.x,dt=k.max.y-k.min.y,vt=k.isBox3?k.max.z-k.min.z:1,bt=k.min.x,Lt=k.min.y,Ft=k.isBox3?k.min.z:0):(st=ae.width,dt=ae.height,vt=ae.depth||1,bt=0,Lt=0,Ft=0),G!==null?(Mt=G.x,Xt=G.y,ie=G.z):(Mt=0,Xt=0,ie=0);let Ie=Ot.convert(N.format),Zt=Ot.convert(N.type),wt;N.isData3DTexture?(R.setTexture3D(N,0),wt=F.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(R.setTexture2DArray(N,0),wt=F.TEXTURE_2D_ARRAY):(R.setTexture2D(N,0),wt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,N.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,N.unpackAlignment);let gn=F.getParameter(F.UNPACK_ROW_LENGTH),$t=F.getParameter(F.UNPACK_IMAGE_HEIGHT),je=F.getParameter(F.UNPACK_SKIP_PIXELS),gi=F.getParameter(F.UNPACK_SKIP_ROWS),Ne=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ae.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ae.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,bt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Lt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ft);let os=w.isDataArrayTexture||w.isData3DTexture,le=N.isDataArrayTexture||N.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let ln=Tt.get(w),as=Tt.get(N),Ge=Tt.get(ln.__renderTarget),In=Tt.get(as.__renderTarget);Et.bindFramebuffer(F.READ_FRAMEBUFFER,Ge.__webglFramebuffer),Et.bindFramebuffer(F.DRAW_FRAMEBUFFER,In.__webglFramebuffer);for(let Ln=0;Ln<vt;Ln++)os&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Tt.get(w).__webglTexture,O,Ft+Ln),w.isDepthTexture?(le&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Tt.get(N).__webglTexture,O,ie+Ln),F.blitFramebuffer(bt,Lt,st,dt,Mt,Xt,st,dt,F.DEPTH_BUFFER_BIT,F.NEAREST)):le?F.copyTexSubImage3D(wt,O,Mt,Xt,ie+Ln,bt,Lt,st,dt):F.copyTexSubImage2D(wt,O,Mt,Xt,ie+Ln,bt,Lt,st,dt);Et.bindFramebuffer(F.READ_FRAMEBUFFER,null),Et.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else le?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(wt,O,Mt,Xt,ie,st,dt,vt,Ie,Zt,ae.data):N.isCompressedArrayTexture?F.compressedTexSubImage3D(wt,O,Mt,Xt,ie,st,dt,vt,Ie,ae.data):F.texSubImage3D(wt,O,Mt,Xt,ie,st,dt,vt,Ie,Zt,ae):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,O,Mt,Xt,st,dt,Ie,Zt,ae.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,O,Mt,Xt,ae.width,ae.height,Ie,ae.data):F.texSubImage2D(F.TEXTURE_2D,O,Mt,Xt,st,dt,Ie,Zt,ae);F.pixelStorei(F.UNPACK_ROW_LENGTH,gn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,$t),F.pixelStorei(F.UNPACK_SKIP_PIXELS,je),F.pixelStorei(F.UNPACK_SKIP_ROWS,gi),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ne),O===0&&N.generateMipmaps&&F.generateMipmap(wt),Et.unbindTexture()},this.copyTextureToTexture3D=function(w,N,k=null,G=null,O=0){return w.isTexture!==!0&&(_s("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,G=arguments[1]||null,w=arguments[2],N=arguments[3],O=arguments[4]||0),_s('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,N,k,G,O)},this.initRenderTarget=function(w){Tt.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),Et.unbindTexture()},this.resetState=function(){S=0,T=0,I=null,Et.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}},$i=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new yt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var qn=class extends ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ya=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Pa,this.updateRanges=[],this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ce=new A,Lr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=tn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=tn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=tn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=tn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=tn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array),r=Jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ce(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Yn=class extends Rn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ii,ds=new A,Li=new A,Di=new A,Ui=new At,fs=new At,wh=new Vt,sr=new A,ps=new A,rr=new A,Wc=new At,Ho=new At,Xc=new At,ci=class extends ue{constructor(t=new Yn){if(super(),this.isSprite=!0,this.type="Sprite",Ii===void 0){Ii=new qt;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ya(e,5);Ii.setIndex([0,1,2,0,2,3]),Ii.setAttribute("position",new Lr(n,3,0,!1)),Ii.setAttribute("uv",new Lr(n,2,3,!1))}this.geometry=Ii,this.material=t,this.center=new At(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Li.setFromMatrixScale(this.matrixWorld),wh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Di.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Li.multiplyScalar(-Di.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;or(sr.set(-.5,-.5,0),Di,o,Li,s,r),or(ps.set(.5,-.5,0),Di,o,Li,s,r),or(rr.set(.5,.5,0),Di,o,Li,s,r),Wc.set(0,0),Ho.set(1,0),Xc.set(1,1);let a=t.ray.intersectTriangle(sr,ps,rr,!1,ds);if(a===null&&(or(ps.set(-.5,.5,0),Di,o,Li,s,r),Ho.set(0,1),a=t.ray.intersectTriangle(sr,rr,ps,!1,ds),a===null))return;let l=t.ray.origin.distanceTo(ds);l<t.near||l>t.far||e.push({distance:l,point:ds.clone(),uv:en.getInterpolation(ds,sr,ps,rr,Wc,Ho,Xc,new At),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function or(i,t,e,n,s,r){Ui.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(fs.x=r*Ui.x-s*Ui.y,fs.y=s*Ui.x+r*Ui.y):fs.copy(Ui),i.copy(t),i.x+=fs.x,i.y+=fs.y,i.applyMatrix4(wh)}var Za=class extends Ue{constructor(t=null,e=1,n=1,s,r,o,a,l,c=ke,h=ke,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qe=class extends ce{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Fi=new Vt,qc=new Vt,ar=[],Yc=new rn,Mg=new Vt,ms=new se,gs=new Gn,me=class extends se{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new qe(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Mg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new rn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Fi),Yc.copy(t.boundingBox).applyMatrix4(Fi),this.boundingBox.union(Yc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Fi),gs.copy(t.boundingSphere).applyMatrix4(Fi),this.boundingSphere.union(gs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ms.geometry=this.geometry,ms.material=this.material,ms.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gs.copy(this.boundingSphere),gs.applyMatrix4(n),t.ray.intersectsSphere(gs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Fi),qc.multiplyMatrices(n,Fi),ms.matrixWorld=qc,ms.raycast(t,ar);for(let o=0,a=ar.length;o<a;o++){let l=ar[o];l.instanceId=r,l.object=this,e.push(l)}ar.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new qe(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Za(new Float32Array(s*this.count),s,this.count,fl,un));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var fn=class extends Rn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Dr=new A,Ur=new A,Zc=new Vt,xs=new li,lr=new Gn,Vo=new A,$c=new A,hi=class extends ue{constructor(t=new qt,e=new fn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Dr.fromBufferAttribute(e,s-1),Ur.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Dr.distanceTo(Ur);t.setAttribute("lineDistance",new oe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(s),lr.radius+=r,t.ray.intersectsSphere(lr)===!1)return;Zc.copy(s).invert(),xs.copy(t.ray).applyMatrix4(Zc);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){let f=h.getX(x),y=h.getX(x+1),v=cr(this,t,xs,l,f,y);v&&e.push(v)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(p),f=cr(this,t,xs,l,x,m);f&&e.push(f)}}else{let p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){let f=cr(this,t,xs,l,x,x+1);f&&e.push(f)}if(this.isLineLoop){let x=cr(this,t,xs,l,g-1,p);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function cr(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(Dr.fromBufferAttribute(o,s),Ur.fromBufferAttribute(o,r),e.distanceSqToSegment(Dr,Ur,Vo,$c)>n)return;Vo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Vo);if(!(l<t.near||l>t.far))return{distance:l,point:$c.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var jc=new A,Kc=new A,Cn=class extends hi{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)jc.fromBufferAttribute(e,s),Kc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+jc.distanceTo(Kc);t.setAttribute("lineDistance",new oe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ui=class extends Ue{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ye=class i extends qt{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],p=[],g=0,x=[],m=n/2,f=0;y(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new oe(d,3)),this.setAttribute("normal",new oe(u,3)),this.setAttribute("uv",new oe(p,2));function y(){let _=new A,C=new A,S=0,T=(e-t)/n;for(let I=0;I<=r;I++){let M=[],b=I/r,P=b*(e-t)+t;for(let L=0;L<=s;L++){let D=L/s,B=D*l+a,W=Math.sin(B),H=Math.cos(B);C.x=P*W,C.y=-b*n+m,C.z=P*H,d.push(C.x,C.y,C.z),_.set(W,T,H).normalize(),u.push(_.x,_.y,_.z),p.push(D,1-b),M.push(g++)}x.push(M)}for(let I=0;I<s;I++)for(let M=0;M<r;M++){let b=x[M][I],P=x[M+1][I],L=x[M+1][I+1],D=x[M][I+1];(t>0||M!==0)&&(h.push(b,P,D),S+=3),(e>0||M!==r-1)&&(h.push(P,L,D),S+=3)}c.addGroup(f,S,0),f+=S}function v(_){let C=g,S=new At,T=new A,I=0,M=_===!0?t:e,b=_===!0?1:-1;for(let L=1;L<=s;L++)d.push(0,m*b,0),u.push(0,b,0),p.push(.5,.5),g++;let P=g;for(let L=0;L<=s;L++){let B=L/s*l+a,W=Math.cos(B),H=Math.sin(B);T.x=M*H,T.y=m*b,T.z=M*W,d.push(T.x,T.y,T.z),u.push(0,b,0),S.x=W*.5+.5,S.y=H*.5*b+.5,p.push(S.x,S.y),g++}for(let L=0;L<s;L++){let D=C+L,B=P+L;_===!0?h.push(B,B+1,D):h.push(B+1,B,D),I+=3}c.addGroup(f,I,_===!0?1:2),f+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Zn=class i extends Ye{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var hr=new A,ur=new A,ko=new A,dr=new en,As=class extends qt{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(zi*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:x,b:m,c:f}=dr;if(x.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),dr.getNormal(ko),d[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let y=0;y<3;y++){let v=(y+1)%3,_=d[y],C=d[v],S=dr[h[y]],T=dr[h[v]],I=`${_}_${C}`,M=`${C}_${_}`;M in u&&u[M]?(ko.dot(u[M].normal)<=r&&(p.push(S.x,S.y,S.z),p.push(T.x,T.y,T.z)),u[M]=null):I in u||(u[I]={index0:c[y],index1:c[v],normal:ko.clone()})}}for(let g in u)if(u[g]){let{index0:x,index1:m}=u[g];hr.fromBufferAttribute(a,x),ur.fromBufferAttribute(a,m),p.push(hr.x,hr.y,hr.z),p.push(ur.x,ur.y,ur.z)}this.setAttribute("position",new oe(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var Ze=class i extends qt{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new A,u=new A,p=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){let y=[],v=f/n,_=0;f===0&&o===0?_=.5/e:f===n&&l===Math.PI&&(_=-.5/e);for(let C=0;C<=e;C++){let S=C/e;d.x=-t*Math.cos(s+S*r)*Math.sin(o+v*a),d.y=t*Math.cos(o+v*a),d.z=t*Math.sin(s+S*r)*Math.sin(o+v*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(S+_,1-v),y.push(c++)}h.push(y)}for(let f=0;f<n;f++)for(let y=0;y<e;y++){let v=h[f][y+1],_=h[f][y],C=h[f+1][y],S=h[f+1][y+1];(f!==0||o>0)&&p.push(v,_,S),(f!==n-1||l<Math.PI)&&p.push(_,C,S)}this.setIndex(p),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(x,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ve=class extends Rn{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new yt(16777215),this.specular=new yt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ph,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var $n=class extends fn{static get type(){return"LineDashedMaterial"}constructor(t){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function fr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Eg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ji=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},$a=class extends ji{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$l,endingEnd:$l}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case jl:r=t,a=2*e-n;break;case Kl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case jl:o=t,l=2*n-e;break;case Kl:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,f=-u*m+2*u*x-u*g,y=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,v=(-1-p)*m+(1.5+p)*x+.5*g,_=p*m-p*x;for(let C=0;C!==a;++C)r[C]=f*o[h+C]+y*o[c+C]+v*o[l+C]+_*o[d+C];return r}},ja=class extends ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Ka=class extends ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},on=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=fr(e,this.TimeBufferType),this.values=fr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:fr(t.times,Array),values:fr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ka(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new $a(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case vr:e=this.InterpolantFactoryMethodDiscrete;break;case Ca:e=this.InterpolantFactoryMethodLinear;break;case fo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vr;case this.InterpolantFactoryMethodLinear:return Ca;case this.InterpolantFactoryMethodSmooth:return fo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Eg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===fo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,u=d-n,p=d+n;for(let g=0;g!==n;++g){let x=e[d+g];if(x!==e[u+g]||x!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let p=0;p!==n;++p)e[u+p]=e[d+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};on.prototype.TimeBufferType=Float32Array;on.prototype.ValueBufferType=Float32Array;on.prototype.DefaultInterpolation=Ca;var di=class extends on{constructor(t,e,n){super(t,e,n)}};di.prototype.ValueTypeName="bool";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=vr;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;var Ja=class extends on{};Ja.prototype.ValueTypeName="color";var Qa=class extends on{};Qa.prototype.ValueTypeName="number";var tl=class extends ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)xe.slerpFlat(r,0,o,c-a,o,c,l);return r}},Fr=class extends on{InterpolantFactoryMethodLinear(t){return new tl(this.times,this.values,this.getValueSize(),t)}};Fr.prototype.ValueTypeName="quaternion";Fr.prototype.InterpolantFactoryMethodSmooth=void 0;var fi=class extends on{constructor(t,e,n){super(t,e,n)}};fi.prototype.ValueTypeName="string";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=vr;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var el=class extends on{};el.prototype.ValueTypeName="vector";var nl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},Sg=new nl,il=class{constructor(t){this.manager=t!==void 0?t:Sg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};il.DEFAULT_MATERIAL_NAME="__DEFAULT";var Nr=class extends ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var Go=new Vt,Jc=new A,Qc=new A,sl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ts,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Jc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jc),Qc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qc),e.updateMatrixWorld(),Go.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Go),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Go)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var rl=class extends sl{constructor(){super(new Xn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Rs=class extends Nr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.shadow=new rl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Ki=class extends Nr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ji=class extends qt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var yl="\\[\\]\\.:\\/",wg=new RegExp("["+yl+"]","g"),vl="[^"+yl+"]",Tg="[^"+yl.replace("\\.","")+"]",Ag=/((?:WC+[\/:])*)/.source.replace("WC",vl),Rg=/(WCOD+)?/.source.replace("WCOD",Tg),Cg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vl),Pg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vl),Ig=new RegExp("^"+Ag+Rg+Cg+Pg+"$"),Lg=["material","materials","bones","map"],ol=class{constructor(t,e,n){let s=n||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},he=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(wg,"")}static parseTrackName(t){let e=Ig.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Lg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};he.Composite=ol;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var g_=new Float32Array(1);var th=new Vt,Or=class{constructor(t,e,n=0,s=1/0){this.ray=new li(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ss,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return th.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(th),this}intersectObject(t,e=!0,n=[]){return al(t,this,n,e),n.sort(eh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)al(t[s],this,n,e);return n.sort(eh),n}};function eh(i,t){return i.distance-t.distance}function al(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)al(r[o],t,e,!0)}}var Cs=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ee(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var nh=new A,pr=new A,Br=class{constructor(t=new A,e=new A){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){nh.subVectors(t,this.start),pr.subVectors(this.end,this.start);let n=pr.dot(pr),r=pr.dot(nh)/n;return e&&(r=Ee(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var zr=class extends An{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ll}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ll);var Th={type:"change"},Ml={type:"start"},Rh={type:"end"},Gr=new li,Ah=new ze,Dg=Math.cos(70*gh.DEG2RAD),be=new A,Fe=2*Math.PI,ee={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},bl=1e-6,Wr=class extends zr{constructor(t,e=null){super(t,e),this.state=ee.NONE,this.enabled=!0,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pi.ROTATE,MIDDLE:pi.DOLLY,RIGHT:pi.PAN},this.touches={ONE:mi.ROTATE,TWO:mi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new xe,this._lastTargetPosition=new A,this._quat=new xe().setFromUnitVectors(t.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Cs,this._sphericalDelta=new Cs,this._scale=1,this._panOffset=new A,this._rotateStart=new At,this._rotateEnd=new At,this._rotateDelta=new At,this._panStart=new At,this._panEnd=new At,this._panDelta=new At,this._dollyStart=new At,this._dollyEnd=new At,this._dollyDelta=new At,this._dollyDirection=new A,this._mouse=new At,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Fg.bind(this),this._onPointerDown=Ug.bind(this),this._onPointerUp=Ng.bind(this),this._onContextMenu=Gg.bind(this),this._onMouseWheel=zg.bind(this),this._onKeyDown=Hg.bind(this),this._onTouchStart=Vg.bind(this),this._onTouchMove=kg.bind(this),this._onMouseDown=Og.bind(this),this._onMouseMove=Bg.bind(this),this._interceptControlDown=Wg.bind(this),this._interceptControlUp=Xg.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Th),this.update(),this.state=ee.NONE}update(t=null){let e=this.object.position;be.copy(e).sub(this.target),be.applyQuaternion(this._quat),this._spherical.setFromVector3(be),this.autoRotate&&this.state===ee.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Fe:n>Math.PI&&(n-=Fe),s<-Math.PI?s+=Fe:s>Math.PI&&(s-=Fe),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(be.setFromSpherical(this._spherical),be.applyQuaternion(this._quatInverse),e.copy(this.target).add(be),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=be.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new A(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new A(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=be.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Gr.origin.copy(this.object.position),Gr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Gr.direction))<Dg?this.object.lookAt(this.target):(Ah.setFromNormalAndCoplanarPoint(this.object.up,this.target),Gr.intersectPlane(Ah,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>bl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>bl||this._lastTargetPosition.distanceToSquared(this.target)>bl?(this.dispatchEvent(Th),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Fe/60*this.autoRotateSpeed*t:Fe/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){be.setFromMatrixColumn(e,0),be.multiplyScalar(-t),this._panOffset.add(be)}_panUp(t,e){this.screenSpacePanning===!0?be.setFromMatrixColumn(e,1):(be.setFromMatrixColumn(e,0),be.crossVectors(this.object.up,be)),be.multiplyScalar(t),this._panOffset.add(be)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;be.copy(s).sub(this.target);let r=be.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Fe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Fe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Fe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Fe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Fe*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Fe*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Fe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Fe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new At,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Ug(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Fg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Ng(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Rh),this.state=ee.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Og(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case pi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ee.DOLLY;break;case pi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ee.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ee.ROTATE}break;case pi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ee.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ee.PAN}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(Ml)}function Bg(i){switch(this.state){case ee.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ee.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ee.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function zg(i){this.enabled===!1||this.enableZoom===!1||this.state!==ee.NONE||(i.preventDefault(),this.dispatchEvent(Ml),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Rh))}function Hg(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Vg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case mi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ee.TOUCH_ROTATE;break;case mi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ee.TOUCH_PAN;break;default:this.state=ee.NONE}break;case 2:switch(this.touches.TWO){case mi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ee.TOUCH_DOLLY_PAN;break;case mi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ee.TOUCH_DOLLY_ROTATE;break;default:this.state=ee.NONE}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(Ml)}function kg(i){switch(this._trackPointer(i),this.state){case ee.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ee.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ee.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ee.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ee.NONE}}function Gg(i){this.enabled!==!1&&i.preventDefault()}function Wg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Xg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var qr=0,qg=1,Yg=new A,Ch=new Br,El=new ze,Ph=new A,Xr=new en,Yr=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new Zr,this.unassigned=new Zr,this.vertices=[]}setFromPoints(t){if(t.length>=4){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.vertices.push(new Sl(t[e]));this.compute()}return this}setFromObject(t){let e=[];return t.updateMatrixWorld(!0),t.traverse(function(n){let s=n.geometry;if(s!==void 0){let r=s.attributes.position;if(r!==void 0)for(let o=0,a=r.count;o<a;o++){let l=new A;l.fromBufferAttribute(r,o).applyMatrix4(n.matrixWorld),e.push(l)}}}),this.setFromPoints(e)}containsPoint(t){let e=this.faces;for(let n=0,s=e.length;n<s;n++)if(e[n].distanceToPoint(t)>this.tolerance)return!1;return!0}intersectRay(t,e){let n=this.faces,s=-1/0,r=1/0;for(let o=0,a=n.length;o<a;o++){let l=n[o],c=l.distanceToPoint(t.origin),h=l.normal.dot(t.direction);if(c>0&&h>=0)return null;let d=h!==0?-c/h:0;if(!(d<=0)&&(h>0?r=Math.min(d,r):s=Math.max(d,s),s>r))return null}return s!==-1/0?t.at(s,e):t.at(r,e),e}intersectsRay(t){return this.intersectRay(t,Yg)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}addVertexToFace(t,e){return t.face=e,e.outside===null?this.assigned.append(t):this.assigned.insertBefore(e.outside,t),e.outside=t,this}removeVertexFromFace(t,e){return t===e.outside&&(t.next!==null&&t.next.face===e?e.outside=t.next:e.outside=null),this.assigned.remove(t),this}removeAllVerticesFromFace(t){if(t.outside!==null){let e=t.outside,n=t.outside;for(;n.next!==null&&n.next.face===t;)n=n.next;return this.assigned.removeSubList(e,n),e.prev=n.next=null,t.outside=null,e}}deleteFaceVertices(t,e){let n=this.removeAllVerticesFromFace(t);if(n!==void 0)if(e===void 0)this.unassigned.appendChain(n);else{let s=n;do{let r=s.next;e.distanceToPoint(s.point)>this.tolerance?this.addVertexToFace(s,e):this.unassigned.append(s),s=r}while(s!==null)}return this}resolveUnassignedPoints(t){if(this.unassigned.isEmpty()===!1){let e=this.unassigned.first();do{let n=e.next,s=this.tolerance,r=null;for(let o=0;o<t.length;o++){let a=t[o];if(a.mark===qr){let l=a.distanceToPoint(e.point);if(l>s&&(s=l,r=a),s>1e3*this.tolerance)break}}r!==null&&this.addVertexToFace(e,r),e=n}while(e!==null)}return this}computeExtremes(){let t=new A,e=new A,n=[],s=[];for(let r=0;r<3;r++)n[r]=s[r]=this.vertices[0];t.copy(this.vertices[0].point),e.copy(this.vertices[0].point);for(let r=0,o=this.vertices.length;r<o;r++){let a=this.vertices[r],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),n[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),s[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(t.x),Math.abs(e.x))+Math.max(Math.abs(t.y),Math.abs(e.y))+Math.max(Math.abs(t.z),Math.abs(e.z))),{min:n,max:s}}computeInitialHull(){let t=this.vertices,e=this.computeExtremes(),n=e.min,s=e.max,r=0,o=0;for(let u=0;u<3;u++){let p=s[u].point.getComponent(u)-n[u].point.getComponent(u);p>r&&(r=p,o=u)}let a=n[o],l=s[o],c,h;r=0,Ch.set(a.point,l.point);for(let u=0,p=this.vertices.length;u<p;u++){let g=t[u];if(g!==a&&g!==l){Ch.closestPointToPoint(g.point,!0,Ph);let x=Ph.distanceToSquared(g.point);x>r&&(r=x,c=g)}}r=-1,El.setFromCoplanarPoints(a.point,l.point,c.point);for(let u=0,p=this.vertices.length;u<p;u++){let g=t[u];if(g!==a&&g!==l&&g!==c){let x=Math.abs(El.distanceToPoint(g.point));x>r&&(r=x,h=g)}}let d=[];if(El.distanceToPoint(h.point)<0){d.push(an.create(a,l,c),an.create(h,l,a),an.create(h,c,l),an.create(h,a,c));for(let u=0;u<3;u++){let p=(u+1)%3;d[u+1].getEdge(2).setTwin(d[0].getEdge(p)),d[u+1].getEdge(1).setTwin(d[p+1].getEdge(0))}}else{d.push(an.create(a,c,l),an.create(h,a,l),an.create(h,l,c),an.create(h,c,a));for(let u=0;u<3;u++){let p=(u+1)%3;d[u+1].getEdge(2).setTwin(d[0].getEdge((3-u)%3)),d[u+1].getEdge(0).setTwin(d[p+1].getEdge(1))}}for(let u=0;u<4;u++)this.faces.push(d[u]);for(let u=0,p=t.length;u<p;u++){let g=t[u];if(g!==a&&g!==l&&g!==c&&g!==h){r=this.tolerance;let x=null;for(let m=0;m<4;m++){let f=this.faces[m].distanceToPoint(g.point);f>r&&(r=f,x=this.faces[m])}x!==null&&this.addVertexToFace(g,x)}}return this}reindexFaces(){let t=[];for(let e=0;e<this.faces.length;e++){let n=this.faces[e];n.mark===qr&&t.push(n)}return this.faces=t,this}nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let t,e=0,n=this.assigned.first().face,s=n.outside;do{let r=n.distanceToPoint(s.point);r>e&&(e=r,t=s),s=s.next}while(s!==null&&s.face===n);return t}}computeHorizon(t,e,n,s){this.deleteFaceVertices(n),n.mark=qg;let r;e===null?r=e=n.getEdge(0):r=e.next;do{let o=r.twin,a=o.face;a.mark===qr&&(a.distanceToPoint(t)>this.tolerance?this.computeHorizon(t,o,a,s):s.push(r)),r=r.next}while(r!==e);return this}addAdjoiningFace(t,e){let n=an.create(t,e.tail(),e.head());return this.faces.push(n),n.getEdge(-1).setTwin(e.twin),n.getEdge(0)}addNewFaces(t,e){this.newFaces=[];let n=null,s=null;for(let r=0;r<e.length;r++){let o=e[r],a=this.addAdjoiningFace(t,o);n===null?n=a:a.next.setTwin(s),this.newFaces.push(a.face),s=a}return n.next.setTwin(s),this}addVertexToHull(t){let e=[];return this.unassigned.clear(),this.removeVertexFromFace(t,t.face),this.computeHorizon(t.point,null,t.face,e),this.addNewFaces(t,e),this.resolveUnassignedPoints(this.newFaces),this}cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}compute(){let t;for(this.computeInitialHull();(t=this.nextVertexToAdd())!==void 0;)this.addVertexToHull(t);return this.reindexFaces(),this.cleanup(),this}},an=class i{constructor(){this.normal=new A,this.midpoint=new A,this.area=0,this.constant=0,this.outside=null,this.mark=qr,this.edge=null}static create(t,e,n){let s=new i,r=new Is(t,s),o=new Is(e,s),a=new Is(n,s);return r.next=a.prev=o,o.next=r.prev=a,a.next=o.prev=r,s.edge=r,s.compute()}getEdge(t){let e=this.edge;for(;t>0;)e=e.next,t--;for(;t<0;)e=e.prev,t++;return e}compute(){let t=this.edge.tail(),e=this.edge.head(),n=this.edge.next.head();return Xr.set(t.point,e.point,n.point),Xr.getNormal(this.normal),Xr.getMidpoint(this.midpoint),this.area=Xr.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(t){return this.normal.dot(t)-this.constant}},Is=class{constructor(t,e){this.vertex=t,this.prev=null,this.next=null,this.twin=null,this.face=e}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let t=this.head(),e=this.tail();return e!==null?e.point.distanceTo(t.point):-1}lengthSquared(){let t=this.head(),e=this.tail();return e!==null?e.point.distanceToSquared(t.point):-1}setTwin(t){return this.twin=t,t.twin=this,this}},Sl=class{constructor(t){this.point=t,this.prev=null,this.next=null,this.face=null}},Zr=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(t,e){return e.prev=t.prev,e.next=t,e.prev===null?this.head=e:e.prev.next=e,t.prev=e,this}insertAfter(t,e){return e.prev=t,e.next=t.next,e.next===null?this.tail=e:e.next.prev=e,t.next=e,this}append(t){return this.head===null?this.head=t:this.tail.next=t,t.prev=this.tail,t.next=null,this.tail=t,this}appendChain(t){for(this.head===null?this.head=t:this.tail.next=t,t.prev=this.tail;t.next!==null;)t=t.next;return this.tail=t,this}remove(t){return t.prev===null?this.head=t.next:t.prev.next=t.next,t.next===null?this.tail=t.prev:t.next.prev=t.prev,this}removeSubList(t,e){return t.prev===null?this.head=e.next:t.prev.next=e.next,e.next===null?this.tail=t.prev:e.next.prev=t.prev,this}isEmpty(){return this.head===null}};var es=class extends qt{constructor(t=[]){super();let e=[],n=[],r=new Yr().setFromPoints(t).faces;for(let o=0;o<r.length;o++){let a=r[o],l=a.edge;do{let c=l.head().point;e.push(c.x,c.y,c.z),n.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new oe(e,3)),this.setAttribute("normal",new oe(n,3))}};var $r={H:{symbol:"H",number:1,color:"#FFFFFF",covalentRadius:.31,vdwRadius:1.2,displayRadius:.3},He:{symbol:"He",number:2,color:"#D9FFFF",covalentRadius:.28,vdwRadius:1.4,displayRadius:.3},Li:{symbol:"Li",number:3,color:"#CC80FF",covalentRadius:1.28,vdwRadius:1.82,displayRadius:.5},Be:{symbol:"Be",number:4,color:"#C2FF00",covalentRadius:.96,vdwRadius:1.53,displayRadius:.42},B:{symbol:"B",number:5,color:"#FFB5B5",covalentRadius:.84,vdwRadius:1.92,displayRadius:.4},C:{symbol:"C",number:6,color:"#909090",covalentRadius:.76,vdwRadius:1.7,displayRadius:.38},N:{symbol:"N",number:7,color:"#3050F8",covalentRadius:.71,vdwRadius:1.55,displayRadius:.36},O:{symbol:"O",number:8,color:"#FF0D0D",covalentRadius:.66,vdwRadius:1.52,displayRadius:.35},F:{symbol:"F",number:9,color:"#90E050",covalentRadius:.57,vdwRadius:1.47,displayRadius:.33},Ne:{symbol:"Ne",number:10,color:"#B3E3F5",covalentRadius:.58,vdwRadius:1.54,displayRadius:.33},Na:{symbol:"Na",number:11,color:"#AB5CF2",covalentRadius:1.66,vdwRadius:2.27,displayRadius:.55},Mg:{symbol:"Mg",number:12,color:"#8AFF00",covalentRadius:1.41,vdwRadius:1.73,displayRadius:.52},Al:{symbol:"Al",number:13,color:"#BFA6A6",covalentRadius:1.21,vdwRadius:1.84,displayRadius:.48},Si:{symbol:"Si",number:14,color:"#F0C8A0",covalentRadius:1.11,vdwRadius:2.1,displayRadius:.46},P:{symbol:"P",number:15,color:"#FF8000",covalentRadius:1.07,vdwRadius:1.8,displayRadius:.44},S:{symbol:"S",number:16,color:"#FFFF30",covalentRadius:1.05,vdwRadius:1.8,displayRadius:.44},Cl:{symbol:"Cl",number:17,color:"#1FF01F",covalentRadius:1.02,vdwRadius:1.75,displayRadius:.43},Ar:{symbol:"Ar",number:18,color:"#80D1E3",covalentRadius:1.06,vdwRadius:1.88,displayRadius:.44},K:{symbol:"K",number:19,color:"#8F40D4",covalentRadius:2.03,vdwRadius:2.75,displayRadius:.6},Ca:{symbol:"Ca",number:20,color:"#3DFF00",covalentRadius:1.76,vdwRadius:2.31,displayRadius:.57},Sc:{symbol:"Sc",number:21,color:"#E6E6E6",covalentRadius:1.7,vdwRadius:2.15,displayRadius:.55},Ti:{symbol:"Ti",number:22,color:"#BFC2C7",covalentRadius:1.6,vdwRadius:2.11,displayRadius:.53},V:{symbol:"V",number:23,color:"#A6A6AB",covalentRadius:1.53,vdwRadius:2.07,displayRadius:.52},Cr:{symbol:"Cr",number:24,color:"#8A99C7",covalentRadius:1.39,vdwRadius:2.06,displayRadius:.5},Mn:{symbol:"Mn",number:25,color:"#9C7AC7",covalentRadius:1.39,vdwRadius:2.05,displayRadius:.5},Fe:{symbol:"Fe",number:26,color:"#E06633",covalentRadius:1.32,vdwRadius:2.04,displayRadius:.48},Co:{symbol:"Co",number:27,color:"#F090A0",covalentRadius:1.26,vdwRadius:2,displayRadius:.47},Ni:{symbol:"Ni",number:28,color:"#50D050",covalentRadius:1.24,vdwRadius:1.97,displayRadius:.46},Cu:{symbol:"Cu",number:29,color:"#C88033",covalentRadius:1.32,vdwRadius:1.96,displayRadius:.48},Zn:{symbol:"Zn",number:30,color:"#7D80B0",covalentRadius:1.22,vdwRadius:2.01,displayRadius:.46},Ga:{symbol:"Ga",number:31,color:"#C28F8F",covalentRadius:1.22,vdwRadius:1.87,displayRadius:.46},Ge:{symbol:"Ge",number:32,color:"#668F8F",covalentRadius:1.2,vdwRadius:2.11,displayRadius:.45},As:{symbol:"As",number:33,color:"#BD80E3",covalentRadius:1.19,vdwRadius:1.85,displayRadius:.45},Se:{symbol:"Se",number:34,color:"#FFA100",covalentRadius:1.2,vdwRadius:1.9,displayRadius:.45},Br:{symbol:"Br",number:35,color:"#A62929",covalentRadius:1.2,vdwRadius:1.85,displayRadius:.45},Kr:{symbol:"Kr",number:36,color:"#5CB8D1",covalentRadius:1.16,vdwRadius:2.02,displayRadius:.44},Rb:{symbol:"Rb",number:37,color:"#702EB0",covalentRadius:2.2,vdwRadius:3.03,displayRadius:.62},Sr:{symbol:"Sr",number:38,color:"#00FF00",covalentRadius:1.95,vdwRadius:2.49,displayRadius:.58},Y:{symbol:"Y",number:39,color:"#94FFFF",covalentRadius:1.9,vdwRadius:2.32,displayRadius:.57},Zr:{symbol:"Zr",number:40,color:"#94E0E0",covalentRadius:1.75,vdwRadius:2.23,displayRadius:.55},Nb:{symbol:"Nb",number:41,color:"#73C2C9",covalentRadius:1.64,vdwRadius:2.18,displayRadius:.53},Mo:{symbol:"Mo",number:42,color:"#54B5B5",covalentRadius:1.54,vdwRadius:2.17,displayRadius:.52},Ru:{symbol:"Ru",number:44,color:"#248F8F",covalentRadius:1.46,vdwRadius:2.13,displayRadius:.51},Rh:{symbol:"Rh",number:45,color:"#0A7D8C",covalentRadius:1.42,vdwRadius:2.1,displayRadius:.5},Pd:{symbol:"Pd",number:46,color:"#006985",covalentRadius:1.39,vdwRadius:2.1,displayRadius:.5},Ag:{symbol:"Ag",number:47,color:"#C0C0C0",covalentRadius:1.45,vdwRadius:2.11,displayRadius:.51},Cd:{symbol:"Cd",number:48,color:"#FFD98F",covalentRadius:1.44,vdwRadius:2.18,displayRadius:.51},In:{symbol:"In",number:49,color:"#A67573",covalentRadius:1.42,vdwRadius:1.93,displayRadius:.5},Sn:{symbol:"Sn",number:50,color:"#668080",covalentRadius:1.39,vdwRadius:2.17,displayRadius:.5},Sb:{symbol:"Sb",number:51,color:"#9E63B5",covalentRadius:1.39,vdwRadius:2.06,displayRadius:.5},Te:{symbol:"Te",number:52,color:"#D47A00",covalentRadius:1.38,vdwRadius:2.06,displayRadius:.5},I:{symbol:"I",number:53,color:"#940094",covalentRadius:1.39,vdwRadius:1.98,displayRadius:.5},Xe:{symbol:"Xe",number:54,color:"#429EB0",covalentRadius:1.4,vdwRadius:2.16,displayRadius:.5},Cs:{symbol:"Cs",number:55,color:"#57178F",covalentRadius:2.44,vdwRadius:3.43,displayRadius:.65},Ba:{symbol:"Ba",number:56,color:"#00C900",covalentRadius:2.15,vdwRadius:2.68,displayRadius:.6},La:{symbol:"La",number:57,color:"#70D4FF",covalentRadius:2.07,vdwRadius:2.43,displayRadius:.58},Ce:{symbol:"Ce",number:58,color:"#FFFFC7",covalentRadius:2.04,vdwRadius:2.42,displayRadius:.58},Pr:{symbol:"Pr",number:59,color:"#D9FFC7",covalentRadius:2.03,vdwRadius:2.4,displayRadius:.58},Nd:{symbol:"Nd",number:60,color:"#C7FFC7",covalentRadius:2.01,vdwRadius:2.39,displayRadius:.58},Sm:{symbol:"Sm",number:62,color:"#8FFFC7",covalentRadius:1.98,vdwRadius:2.36,displayRadius:.58},Eu:{symbol:"Eu",number:63,color:"#61FFC7",covalentRadius:1.98,vdwRadius:2.35,displayRadius:.58},Gd:{symbol:"Gd",number:64,color:"#45FFC7",covalentRadius:1.96,vdwRadius:2.34,displayRadius:.58},Tb:{symbol:"Tb",number:65,color:"#30FFC7",covalentRadius:1.94,vdwRadius:2.33,displayRadius:.57},Dy:{symbol:"Dy",number:66,color:"#1FFFC7",covalentRadius:1.92,vdwRadius:2.31,displayRadius:.57},Ho:{symbol:"Ho",number:67,color:"#00FF9C",covalentRadius:1.92,vdwRadius:2.3,displayRadius:.57},Er:{symbol:"Er",number:68,color:"#00E675",covalentRadius:1.89,vdwRadius:2.29,displayRadius:.56},Tm:{symbol:"Tm",number:69,color:"#00D452",covalentRadius:1.9,vdwRadius:2.27,displayRadius:.56},Yb:{symbol:"Yb",number:70,color:"#00BF38",covalentRadius:1.87,vdwRadius:2.26,displayRadius:.56},Lu:{symbol:"Lu",number:71,color:"#00AB24",covalentRadius:1.87,vdwRadius:2.24,displayRadius:.56},Hf:{symbol:"Hf",number:72,color:"#4DC2FF",covalentRadius:1.75,vdwRadius:2.23,displayRadius:.55},Ta:{symbol:"Ta",number:73,color:"#4DA6FF",covalentRadius:1.7,vdwRadius:2.22,displayRadius:.54},W:{symbol:"W",number:74,color:"#2194D6",covalentRadius:1.62,vdwRadius:2.18,displayRadius:.53},Re:{symbol:"Re",number:75,color:"#267DAB",covalentRadius:1.51,vdwRadius:2.16,displayRadius:.51},Os:{symbol:"Os",number:76,color:"#266696",covalentRadius:1.44,vdwRadius:2.16,displayRadius:.51},Ir:{symbol:"Ir",number:77,color:"#175487",covalentRadius:1.41,vdwRadius:2.13,displayRadius:.5},Pt:{symbol:"Pt",number:78,color:"#D0D0E0",covalentRadius:1.36,vdwRadius:2.13,displayRadius:.49},Au:{symbol:"Au",number:79,color:"#FFD123",covalentRadius:1.36,vdwRadius:2.14,displayRadius:.49},Pb:{symbol:"Pb",number:82,color:"#575961",covalentRadius:1.46,vdwRadius:2.02,displayRadius:.51},Bi:{symbol:"Bi",number:83,color:"#9E4FB5",covalentRadius:1.48,vdwRadius:2.07,displayRadius:.51},U:{symbol:"U",number:92,color:"#008FFF",covalentRadius:1.96,vdwRadius:2.41,displayRadius:.58}},Ih={};for(let i of Object.values($r))Ih[i.number]=i;var jr={symbol:"X",number:0,color:"#FF69B4",covalentRadius:1.5,vdwRadius:2,displayRadius:.5};function Zg(i){return i.charAt(0).toUpperCase()+i.slice(1).toLowerCase()}function Pn(i){return $r[Zg(i)]||jr}function ns(i){return Ih[i]||jr}function Lh(i){let t=parseInt(i.slice(1,3),16)/255,e=parseInt(i.slice(3,5),16)/255,n=parseInt(i.slice(5,7),16)/255,s=Math.max(t,e,n),r=Math.min(t,e,n),o=0,a=0,l=(s+r)/2;if(s!==r){let x=s-r;a=l>.5?x/(2-s-r):x/(s+r),s===t?o=((e-n)/x+(e<n?6:0))/6:s===e?o=((n-t)/x+2)/6:o=((t-e)/x+4)/6}l=Math.max(l,.35),l=Math.min(l+(1-l)*.2,.92);let c=(x,m,f)=>(f<0&&(f+=1),f>1&&(f-=1),f<1/6?x+(m-x)*6*f:f<1/2?m:f<2/3?x+(m-x)*(2/3-f)*6:x),h=l<.5?l*(1+a):l+a-l*a,d=2*l-h,u=Math.round(c(d,h,o+1/3)*255),p=Math.round(c(d,h,o)*255),g=Math.round(c(d,h,o-1/3)*255);return"#"+((1<<24)+(u<<16)+(p<<8)+g).toString(16).slice(1).toUpperCase()}var Dh={};for(let[i,t]of Object.entries($r))Dh[i]=Lh(t.color);var $g=Lh(jr.color);function Uh(i,t){let e=i.charAt(0).toUpperCase()+i.slice(1).toLowerCase();return t==="dark"?Dh[e]||$g:Pn(e).color}function Fh(i){return i==="dark"?{line:11184810,dash:8947848,bondUnicolor:"#aaaaaa",isoPos:6711039,isoNeg:16737894}:{line:5592405,dash:4473924,bondUnicolor:"#666666",isoPos:2237132,isoNeg:13378082}}var wl=[0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0],Nh=[[-1],[0,8,3,-1],[0,1,9,-1],[1,8,3,9,8,1,-1],[1,2,10,-1],[0,8,3,1,2,10,-1],[9,2,10,0,2,9,-1],[2,8,3,2,10,8,10,9,8,-1],[3,11,2,-1],[0,11,2,8,11,0,-1],[1,9,0,2,3,11,-1],[1,11,2,1,9,11,9,8,11,-1],[3,10,1,11,10,3,-1],[0,10,1,0,8,10,8,11,10,-1],[3,9,0,3,11,9,11,10,9,-1],[9,8,10,10,8,11,-1],[4,7,8,-1],[4,3,0,7,3,4,-1],[0,1,9,8,4,7,-1],[4,1,9,4,7,1,7,3,1,-1],[1,2,10,8,4,7,-1],[3,4,7,3,0,4,1,2,10,-1],[9,2,10,9,0,2,8,4,7,-1],[2,10,9,2,9,7,2,7,3,7,9,4,-1],[8,4,7,3,11,2,-1],[11,4,7,11,2,4,2,0,4,-1],[9,0,1,8,4,7,2,3,11,-1],[4,7,11,9,4,11,9,11,2,9,2,1,-1],[3,10,1,3,11,10,7,8,4,-1],[1,11,10,1,4,11,1,0,4,7,11,4,-1],[4,7,8,9,0,11,9,11,10,11,0,3,-1],[4,7,11,4,11,9,9,11,10,-1],[9,5,4,-1],[9,5,4,0,8,3,-1],[0,5,4,1,5,0,-1],[8,5,4,8,3,5,3,1,5,-1],[1,2,10,9,5,4,-1],[3,0,8,1,2,10,4,9,5,-1],[5,2,10,5,4,2,4,0,2,-1],[2,10,5,3,2,5,3,5,4,3,4,8,-1],[9,5,4,2,3,11,-1],[0,11,2,0,8,11,4,9,5,-1],[0,5,4,0,1,5,2,3,11,-1],[2,1,5,2,5,8,2,8,11,4,8,5,-1],[10,3,11,10,1,3,9,5,4,-1],[4,9,5,0,8,1,8,10,1,8,11,10,-1],[5,4,0,5,0,11,5,11,10,11,0,3,-1],[5,4,8,5,8,10,10,8,11,-1],[9,7,8,5,7,9,-1],[9,3,0,9,5,3,5,7,3,-1],[0,7,8,0,1,7,1,5,7,-1],[1,5,3,3,5,7,-1],[9,7,8,9,5,7,10,1,2,-1],[10,1,2,9,5,0,5,3,0,5,7,3,-1],[8,0,2,8,2,5,8,5,7,10,5,2,-1],[2,10,5,2,5,3,3,5,7,-1],[7,9,5,7,8,9,3,11,2,-1],[9,5,7,9,7,2,9,2,0,2,7,11,-1],[2,3,11,0,1,8,1,7,8,1,5,7,-1],[11,2,1,11,1,7,7,1,5,-1],[9,5,8,8,5,7,10,1,3,10,3,11,-1],[5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1],[11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1],[11,10,5,7,11,5,-1],[10,6,5,-1],[0,8,3,5,10,6,-1],[9,0,1,5,10,6,-1],[1,8,3,1,9,8,5,10,6,-1],[1,6,5,2,6,1,-1],[1,6,5,1,2,6,3,0,8,-1],[9,6,5,9,0,6,0,2,6,-1],[5,9,8,5,8,2,5,2,6,3,2,8,-1],[2,3,11,10,6,5,-1],[11,0,8,11,2,0,10,6,5,-1],[0,1,9,2,3,11,5,10,6,-1],[5,10,6,1,9,2,9,11,2,9,8,11,-1],[6,3,11,6,5,3,5,1,3,-1],[0,8,11,0,11,5,0,5,1,5,11,6,-1],[3,11,6,0,3,6,0,6,5,0,5,9,-1],[6,5,9,6,9,11,11,9,8,-1],[5,10,6,4,7,8,-1],[4,3,0,4,7,3,6,5,10,-1],[1,9,0,5,10,6,8,4,7,-1],[10,6,5,1,9,7,1,7,3,7,9,4,-1],[6,1,2,6,5,1,4,7,8,-1],[1,2,5,5,2,6,3,0,4,3,4,7,-1],[8,4,7,9,0,5,0,6,5,0,2,6,-1],[7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1],[3,11,2,7,8,4,10,6,5,-1],[5,10,6,4,7,2,4,2,0,2,7,11,-1],[0,1,9,4,7,8,2,3,11,5,10,6,-1],[9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1],[8,4,7,3,11,5,3,5,1,5,11,6,-1],[5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1],[0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1],[6,5,9,6,9,11,4,7,9,7,11,9,-1],[10,4,9,6,4,10,-1],[4,10,6,4,9,10,0,8,3,-1],[10,0,1,10,6,0,6,4,0,-1],[8,3,1,8,1,6,8,6,4,6,1,10,-1],[1,4,9,1,2,4,2,6,4,-1],[3,0,8,1,2,9,2,4,9,2,6,4,-1],[0,2,4,4,2,6,-1],[8,3,2,8,2,4,4,2,6,-1],[10,4,9,10,6,4,11,2,3,-1],[0,8,2,2,8,11,4,9,10,4,10,6,-1],[3,11,2,0,1,6,0,6,4,6,1,10,-1],[6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1],[9,6,4,9,3,6,9,1,3,11,6,3,-1],[8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1],[3,11,6,3,6,0,0,6,4,-1],[6,4,8,11,6,8,-1],[7,10,6,7,8,10,8,9,10,-1],[0,7,3,0,10,7,0,9,10,6,7,10,-1],[10,6,7,1,10,7,1,7,8,1,8,0,-1],[10,6,7,10,7,1,1,7,3,-1],[1,2,6,1,6,8,1,8,9,8,6,7,-1],[2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1],[7,8,0,7,0,6,6,0,2,-1],[7,3,2,6,7,2,-1],[2,3,11,10,6,8,10,8,9,8,6,7,-1],[2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1],[1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1],[11,2,1,11,1,7,10,6,1,6,7,1,-1],[8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1],[0,9,1,11,6,7,-1],[7,8,0,7,0,6,3,11,0,11,6,0,-1],[7,11,6,-1],[7,6,11,-1],[3,0,8,11,7,6,-1],[0,1,9,11,7,6,-1],[8,1,9,8,3,1,11,7,6,-1],[10,1,2,6,11,7,-1],[1,2,10,3,0,8,6,11,7,-1],[2,9,0,2,10,9,6,11,7,-1],[6,11,7,2,10,3,10,8,3,10,9,8,-1],[7,2,3,6,2,7,-1],[7,0,8,7,6,0,6,2,0,-1],[2,7,6,2,3,7,0,1,9,-1],[1,6,2,1,8,6,1,9,8,8,7,6,-1],[10,7,6,10,1,7,1,3,7,-1],[10,7,6,1,7,10,1,8,7,1,0,8,-1],[0,3,7,0,7,10,0,10,9,6,10,7,-1],[7,6,10,7,10,8,8,10,9,-1],[6,8,4,11,8,6,-1],[3,6,11,3,0,6,0,4,6,-1],[8,6,11,8,4,6,9,0,1,-1],[9,4,6,9,6,3,9,3,1,11,3,6,-1],[6,8,4,6,11,8,2,10,1,-1],[1,2,10,3,0,11,0,6,11,0,4,6,-1],[4,11,8,4,6,11,0,2,9,2,10,9,-1],[10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1],[8,2,3,8,4,2,4,6,2,-1],[0,4,2,4,6,2,-1],[1,9,0,2,3,4,2,4,6,4,3,8,-1],[1,9,4,1,4,2,2,4,6,-1],[8,1,3,8,6,1,8,4,6,6,10,1,-1],[10,1,0,10,0,6,6,0,4,-1],[4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1],[10,9,4,6,10,4,-1],[4,9,5,7,6,11,-1],[0,8,3,4,9,5,11,7,6,-1],[5,0,1,5,4,0,7,6,11,-1],[11,7,6,8,3,4,3,5,4,3,1,5,-1],[9,5,4,10,1,2,7,6,11,-1],[6,11,7,1,2,10,0,8,3,4,9,5,-1],[7,6,11,5,4,10,4,2,10,4,0,2,-1],[3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1],[7,2,3,7,6,2,5,4,9,-1],[9,5,4,0,8,6,0,6,2,6,8,7,-1],[3,6,2,3,7,6,1,5,0,5,4,0,-1],[6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1],[9,5,4,10,1,6,1,7,6,1,3,7,-1],[1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1],[4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1],[7,6,10,7,10,8,5,4,10,4,8,10,-1],[6,9,5,6,11,9,11,8,9,-1],[3,6,11,0,6,3,0,5,6,0,9,5,-1],[0,11,8,0,5,11,0,1,5,5,6,11,-1],[6,11,3,6,3,5,5,3,1,-1],[1,2,10,9,5,11,9,11,8,11,5,6,-1],[0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1],[11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1],[6,11,3,6,3,5,2,10,3,10,5,3,-1],[5,8,9,5,2,8,5,6,2,3,8,2,-1],[9,5,6,9,6,0,0,6,2,-1],[1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1],[1,5,6,2,1,6,-1],[1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1],[10,1,0,10,0,6,9,5,0,5,6,0,-1],[0,3,8,5,6,10,-1],[10,5,6,-1],[11,5,10,7,5,11,-1],[11,5,10,11,7,5,8,3,0,-1],[5,11,7,5,10,11,1,9,0,-1],[10,7,5,10,11,7,9,8,1,8,3,1,-1],[11,1,2,11,7,1,7,5,1,-1],[0,8,3,1,2,7,1,7,5,7,2,11,-1],[9,7,5,9,2,7,9,0,2,2,11,7,-1],[7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1],[2,5,10,2,3,5,3,7,5,-1],[8,2,0,8,5,2,8,7,5,10,2,5,-1],[9,0,1,5,10,3,5,3,7,3,10,2,-1],[9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1],[1,3,5,3,7,5,-1],[0,8,7,0,7,1,1,7,5,-1],[9,0,3,9,3,5,5,3,7,-1],[9,8,7,5,9,7,-1],[5,8,4,5,10,8,10,11,8,-1],[5,0,4,5,11,0,5,10,11,11,3,0,-1],[0,1,9,8,4,10,8,10,11,10,4,5,-1],[10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1],[2,5,1,2,8,5,2,11,8,4,5,8,-1],[0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1],[0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1],[9,4,5,2,11,3,-1],[2,5,10,3,5,2,3,4,5,3,8,4,-1],[5,10,2,5,2,4,4,2,0,-1],[3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1],[5,10,2,5,2,4,1,9,2,9,4,2,-1],[8,4,5,8,5,3,3,5,1,-1],[0,4,5,1,0,5,-1],[8,4,5,8,5,3,9,0,5,0,3,5,-1],[9,4,5,-1],[4,11,7,4,9,11,9,10,11,-1],[0,8,3,4,9,7,9,11,7,9,10,11,-1],[1,10,11,1,11,4,1,4,0,7,4,11,-1],[3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1],[4,11,7,9,11,4,9,2,11,9,1,2,-1],[9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1],[11,7,4,11,4,2,2,4,0,-1],[11,7,4,11,4,2,8,3,4,3,2,4,-1],[2,9,10,2,7,9,2,3,7,7,4,9,-1],[9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1],[3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1],[1,10,2,8,7,4,-1],[4,9,1,4,1,7,7,1,3,-1],[4,9,1,4,1,7,0,8,1,8,7,1,-1],[4,0,3,7,4,3,-1],[4,8,7,-1],[9,10,8,10,11,8,-1],[3,0,9,3,9,11,11,9,10,-1],[0,1,10,0,10,8,8,10,11,-1],[3,1,10,11,3,10,-1],[1,2,11,1,11,9,9,11,8,-1],[3,0,9,3,9,11,1,2,9,2,11,9,-1],[0,2,11,8,0,11,-1],[3,2,11,-1],[2,3,8,2,8,10,10,8,9,-1],[9,10,2,0,9,2,-1],[2,3,8,2,8,10,0,1,8,1,10,8,-1],[1,10,2,-1],[1,3,8,9,1,8,-1],[0,9,1,-1],[0,3,8,-1],[-1]];function Oh(i,t,e){let[n,s,r]=t,[o,a,l]=e;if(o===1&&a===1&&l===1)return{data:i,dims:t};let c=n*o,h=s*a,d=r*l,u=new Float32Array(c*h*d);for(let p=0;p<c;p++){let g=p%n;for(let x=0;x<h;x++){let m=x%s,f=g*s*r+m*r,y=p*h*d+x*d;for(let v=0;v<l;v++){let _=y+v*r;for(let C=0;C<r;C++)u[_+C]=i[f+C]}}}return{data:u,dims:[c,h,d]}}function Bh(i,t,e,n,s,r=!1){let[o,a,l]=t,c=[],h=[],d=[n[0][0]/o,n[0][1]/o,n[0][2]/o],u=[n[1][0]/a,n[1][1]/a,n[1][2]/a],p=[n[2][0]/l,n[2][1]/l,n[2][2]/l];function g(_,C,S){if(r){let T=(_%o+o)%o,I=(C%a+a)%a,M=(S%l+l)%l;return i[T*a*l+I*l+M]}return i[_*a*l+C*l+S]}function x(_,C,S){return[e[0]+_*d[0]+C*u[0]+S*p[0],e[1]+_*d[1]+C*u[1]+S*p[1],e[2]+_*d[2]+C*u[2]+S*p[2]]}function m(_,C,S,T){if(Math.abs(T-S)<1e-10)return _;let I=(s-S)/(T-S);return[_[0]+I*(C[0]-_[0]),_[1]+I*(C[1]-_[1]),_[2]+I*(C[2]-_[2])]}let f=r?o:o-1,y=r?a:a-1,v=r?l:l-1;for(let _=0;_<f;_++)for(let C=0;C<y;C++)for(let S=0;S<v;S++){let T=[g(_,C,S),g(_+1,C,S),g(_+1,C+1,S),g(_,C+1,S),g(_,C,S+1),g(_+1,C,S+1),g(_+1,C+1,S+1),g(_,C+1,S+1)],I=0;for(let D=0;D<8;D++)T[D]<s&&(I|=1<<D);if(wl[I]===0)continue;let M=[x(_,C,S),x(_+1,C,S),x(_+1,C+1,S),x(_,C+1,S),x(_,C,S+1),x(_+1,C,S+1),x(_+1,C+1,S+1),x(_,C+1,S+1)],b=new Array(12),P=wl[I];P&1&&(b[0]=m(M[0],M[1],T[0],T[1])),P&2&&(b[1]=m(M[1],M[2],T[1],T[2])),P&4&&(b[2]=m(M[2],M[3],T[2],T[3])),P&8&&(b[3]=m(M[3],M[0],T[3],T[0])),P&16&&(b[4]=m(M[4],M[5],T[4],T[5])),P&32&&(b[5]=m(M[5],M[6],T[5],T[6])),P&64&&(b[6]=m(M[6],M[7],T[6],T[7])),P&128&&(b[7]=m(M[7],M[4],T[7],T[4])),P&256&&(b[8]=m(M[0],M[4],T[0],T[4])),P&512&&(b[9]=m(M[1],M[5],T[1],T[5])),P&1024&&(b[10]=m(M[2],M[6],T[2],T[6])),P&2048&&(b[11]=m(M[3],M[7],T[3],T[7]));let L=Nh[I];for(let D=0;L[D]!==-1;D+=3){let B=b[L[D]],W=b[L[D+1]],H=b[L[D+2]];c.push(B[0],B[1],B[2]),c.push(W[0],W[1],W[2]),c.push(H[0],H[1],H[2]);let Z=[W[0]-B[0],W[1]-B[1],W[2]-B[2]],V=[H[0]-B[0],H[1]-B[1],H[2]-B[2]],et=Z[1]*V[2]-Z[2]*V[1],nt=Z[2]*V[0]-Z[0]*V[2],rt=Z[0]*V[1]-Z[1]*V[0],pt=Math.sqrt(et*et+nt*nt+rt*rt)||1;h.push(et/pt,nt/pt,rt/pt),h.push(et/pt,nt/pt,rt/pt),h.push(et/pt,nt/pt,rt/pt)}}return{positions:new Float32Array(c),normals:new Float32Array(h)}}function zh(i,t,e,n,s,r,o,a=!1){let[l,c]=t,h=[],d=[],u=x=>a?x<=r:x>=r,p=(x,m,f,y)=>{if(Math.abs(y-f)<1e-10)return x;let v=(r-f)/(y-f);return[x[0]+v*(m[0]-x[0]),x[1]+v*(m[1]-x[1]),x[2]+v*(m[2]-x[2])]},g=x=>{h.push(x[0],x[1],x[2]),d.push(o[0],o[1],o[2])};for(let x=0;x<l-1;x++)for(let m=0;m<c-1;m++){let f=i[x*c+m],y=i[(x+1)*c+m],v=i[(x+1)*c+(m+1)],_=i[x*c+(m+1)],C=0;if(u(f)&&(C|=1),u(y)&&(C|=2),u(v)&&(C|=4),u(_)&&(C|=8),C===0)continue;let S=[e[0]+x*n[0]+m*s[0],e[1]+x*n[1]+m*s[1],e[2]+x*n[2]+m*s[2]],T=[S[0]+n[0],S[1]+n[1],S[2]+n[2]],I=[T[0]+s[0],T[1]+s[1],T[2]+s[2]],M=[S[0]+s[0],S[1]+s[1],S[2]+s[2]],b=[S,T,I,M,null,null,null,null],P=jg[C];P&1&&(b[4]=p(S,T,f,y)),P&2&&(b[5]=p(T,I,y,v)),P&4&&(b[6]=p(I,M,v,_)),P&8&&(b[7]=p(M,S,_,f));let L=Kg[C];for(let D of L){let B=b[D[0]];for(let W=1;W<D.length-1;W++){let H=b[D[W]],Z=b[D[W+1]];g(B),g(H),g(Z)}}}return{positions:new Float32Array(h),normals:new Float32Array(d)}}var jg=[0,9,3,10,6,15,5,12,12,5,15,6,10,3,9,0],Kg=[[],[[0,4,7]],[[1,5,4]],[[0,1,5,7]],[[2,6,5]],[[0,4,7],[2,6,5]],[[1,2,6,4]],[[0,1,2,6,7]],[[3,7,6]],[[0,4,6,3]],[[1,5,4],[3,7,6]],[[0,1,5,6,3]],[[5,2,3,7]],[[0,4,5,2,3]],[[4,1,2,3,7]],[[0,1,2,3]]];var Kr=class{constructor(){this.scene=new qn;this.camera=new Xn(-2,2,2,-2,.1,10);this.arrows=new re;this.materials=[];this.geometries=[];this.textures=[];this._size=300;this._dx=0;this._dy=0;this.camera.position.set(0,0,5),this.camera.lookAt(0,0,0);let t=new Ki(16777215,1);this.scene.add(t),this.scene.add(this.arrows),this.build([1,0,0],[0,1,0],[0,0,1])}get size(){return this._size}setSize(t){this._size=Math.max(60,Math.min(400,t))}get offset(){return{dx:this._dx,dy:this._dy}}setOffset(t,e){this._dx=t,this._dy=e}resetOffset(){this._dx=0,this._dy=0}getRect(t,e){let n=this._size,s=16,r=t-s-n,o=e-s-n,a=n/2,l=Math.max(-a,Math.min(t-a,r-this._dx)),c=Math.max(-a,Math.min(e-a,o-this._dy));return{x:l,y:c,w:n,h:n}}update(t,e,n){this.build(t,e,n)}disposeContents(){for(;this.arrows.children.length>0;)this.arrows.remove(this.arrows.children[0]);for(let t of this.materials)t.dispose();for(let t of this.geometries)t.dispose();for(let t of this.textures)t.dispose();this.materials=[],this.geometries=[],this.textures=[]}build(t,e,n){this.disposeContents();let s=[{v:new A(...t).normalize(),color:16724787,label:"a"},{v:new A(...e).normalize(),color:3394611,label:"b"},{v:new A(...n).normalize(),color:3373055,label:"c"}];for(let{v:a,color:l,label:c}of s){let h=new Ye(.04,.04,1,8);h.translate(0,.5,0),h.rotateX(Math.PI/2);let d=new Wn({color:l});this.geometries.push(h),this.materials.push(d);let u=new se(h,d);u.lookAt(a),this.arrows.add(u);let p=new Zn(.1,.25,8);p.translate(0,.125,0),p.rotateX(Math.PI/2);let g=new Wn({color:l});this.geometries.push(p),this.materials.push(g);let x=new se(p,g);x.position.copy(a.clone().multiplyScalar(1)),x.lookAt(a.clone().multiplyScalar(2)),this.arrows.add(x);let m=document.createElement("canvas");m.width=64,m.height=64;let f=m.getContext("2d");f.fillStyle=`#${l.toString(16).padStart(6,"0")}`,f.font="bold 48px sans-serif",f.textAlign="center",f.textBaseline="middle",f.fillText(c,32,32);let y=new ui(m),v=new Yn({map:y,depthTest:!1});this.textures.push(y),this.materials.push(v);let _=new ci(v);_.position.copy(a.clone().multiplyScalar(1.4)),_.scale.set(.4,.4,1),this.arrows.add(_)}let r=new Ze(.06,8,6),o=new Wn({color:11184810});this.geometries.push(r),this.materials.push(o),this.arrows.add(new se(r,o))}syncToMainCamera(t,e){let n=t.position.clone().sub(e).normalize();this.camera.position.copy(n.multiplyScalar(5)),this.camera.up.copy(t.up),this.camera.lookAt(0,0,0)}render(t){let e=t.domElement.clientWidth,n=t.domElement.clientHeight,s=this.getRect(e,n),r=n-s.y-s.h;t.setViewport(s.x,r,s.w,s.h),t.setScissorTest(!0),t.setScissor(s.x,r,s.w,s.h),t.autoClear=!1,t.clearDepth(),t.render(this.scene,this.camera),t.autoClear=!0,t.setScissorTest(!1)}dispose(){this.disposeContents()}};var Jg=`
in vec3 iPosA;
in vec3 iPosB;
in float iRadius;
in vec3 iColorA;
in vec3 iColorB;

out vec3 vPosA;
out vec3 vPosB;
out float vRadius;
out vec3 vColorA;
out vec3 vColorB;
out vec3 vRayView;

void main() {
  vec3 center = 0.5 * (iPosA + iPosB);
  vec3 delta = iPosB - iPosA;
  float bondLen = length(delta);
  vec3 axisN = delta / max(bondLen, 1e-6);

  // Direction from bond center toward camera (world space). For orthographic
  // cameras this varies slightly by bond position; fine as long as the quad
  // envelops the silhouette.
  vec3 toCam = cameraPosition - center;
  float toCamLen = length(toCam);
  vec3 toCamN = toCam / max(toCamLen, 1e-6);

  // Flip axis to point toward camera \u2014 keeps billboard orientation consistent.
  float dotAC = dot(axisN, toCamN);
  vec3 ldir = dotAC < 0.0 ? -axisN : axisN;

  // Side direction: perpendicular to axis and view. Falls back to an arbitrary
  // perpendicular when camera looks exactly down the axis.
  vec3 side = cross(toCamN, ldir);
  float sideLen = length(side);
  vec3 sideN;
  if (sideLen < 1e-4) {
    vec3 alt = abs(ldir.y) < 0.9 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
    sideN = normalize(cross(ldir, alt));
  } else {
    sideN = side / sideLen;
  }
  // Up (out of quad plane, toward camera). Used to push the quad forward by
  // one radius so it covers the near silhouette when the bond is near-axial.
  vec3 up = normalize(cross(ldir, sideN));

  // position.xy in {-1, +1} marks the 4 quad corners; .x = axial, .y = side.
  float axialExt = 0.5 * bondLen + iRadius;
  vec3 posWorld = center
    + position.x * axialExt * ldir
    + position.y * iRadius * sideN
    + iRadius * up;

  vec4 posView = viewMatrix * vec4(posWorld, 1.0);
  vPosA = (viewMatrix * vec4(iPosA, 1.0)).xyz;
  vPosB = (viewMatrix * vec4(iPosB, 1.0)).xyz;
  vRadius = iRadius;
  vColorA = iColorA;
  vColorB = iColorB;
  vRayView = posView.xyz;

  gl_Position = projectionMatrix * posView;
}
`,Qg=`
precision highp float;

in vec3 vPosA;
in vec3 vPosB;
in float vRadius;
in vec3 vColorA;
in vec3 vColorB;
in vec3 vRayView;

out vec4 fragColor;

// Apply sRGB encoding to match three.js's built-in material output (which adds
// this via <colorspace_fragment>). Without it the impostor output lands raw in
// an sRGB framebuffer and reads as oversaturated vs Phong cylinders.
vec3 linearToSRGB(vec3 c) {
  c = max(c, vec3(0.0));
  vec3 cutoff = step(vec3(0.0031308), c);
  vec3 hi = 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055;
  vec3 lo = c * 12.92;
  return mix(lo, hi, cutoff);
}

// projectionMatrix is not in the fragment prefix \u2014 declare explicitly.
uniform mat4 projectionMatrix;
uniform vec3 uLightDir;
uniform vec3 uLightDirFill;
uniform vec3 uAmbient;
uniform float uShininess;
uniform bool uOrtho;

void main() {
  vec3 rayOrigin;
  vec3 rayDir;
  if (uOrtho) {
    rayOrigin = vec3(vRayView.xy, 0.0);
    rayDir = vec3(0.0, 0.0, -1.0);
  } else {
    rayOrigin = vec3(0.0);
    rayDir = normalize(vRayView);
  }

  vec3 axis = vPosB - vPosA;
  float bondLen = length(axis);
  if (bondLen < 1e-6) discard;
  vec3 axisN = axis / bondLen;

  // Ray-cylinder intersection: solve |(oa + t*d) - ((oa + t*d)\xB7a) a|^2 = r^2.
  vec3 oa = rayOrigin - vPosA;
  float da = dot(rayDir, axisN);
  float wa = dot(oa, axisN);
  float A = 1.0 - da * da;              // ray is unit-length
  // Discard rays nearly parallel to the axis \u2014 the caps are drawn by spheres.
  if (A < 1e-6) discard;
  float B = dot(rayDir, oa) - da * wa;
  float C = dot(oa, oa) - wa * wa - vRadius * vRadius;
  float disc = B * B - A * C;
  if (disc < 0.0) discard;
  float t = (-B - sqrt(disc)) / A;
  if (t < 0.0) discard;

  vec3 hitView = rayOrigin + t * rayDir;
  float axialT = dot(hitView - vPosA, axisN);
  if (axialT < 0.0 || axialT > bondLen) discard;

  // Normal: from the axis to the hit point, perpendicular to the axis.
  vec3 axisPoint = vPosA + axialT * axisN;
  vec3 normalView = normalize(hitView - axisPoint);

  // Bicolor split at midpoint.
  vec3 color = axialT < (0.5 * bondLen) ? vColorA : vColorB;

  // Match three's Phong BRDF: ambient + each directional light both go through
  // BRDF_Lambert = color * RECIPROCAL_PI. Skipping 1/\u03C0 on ambient left bonds
  // looking vivid/rich; apply it uniformly so they fade to the same pastel.
  const float RECIPROCAL_PI = 0.31830988618;
  vec3 L = normalize(uLightDir);
  vec3 LF = normalize(uLightDirFill);
  float ndotl = max(dot(normalView, L), 0.0);
  float ndotlFill = max(dot(normalView, LF), 0.0);
  vec3 shaded = color * (uAmbient + vec3(ndotl * 0.8 + ndotlFill * 0.3)) * RECIPROCAL_PI;
  if (ndotl > 0.0) {
    vec3 R = reflect(-L, normalView);
    vec3 V = -normalize(hitView);
    float spec = pow(max(dot(R, V), 0.0), uShininess);
    shaded += vec3(1.0) * spec * 0.067;
  }
  fragColor = vec4(linearToSRGB(shaded), 1.0);

  vec4 clip = projectionMatrix * vec4(hitView, 1.0);
  float ndcZ = clip.z / clip.w;
  gl_FragDepth = ndcZ * 0.5 + 0.5;
}
`,Tl=null;function tx(){if(Tl)return Tl;let i=new qt,t=new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]);return i.setAttribute("position",new ce(t,3)),i.setIndex([0,1,2,0,2,3]),Tl=i,i}function Hh(){return new Se({vertexShader:Jg,fragmentShader:Qg,glslVersion:Tn,uniforms:{uLightDir:{value:new A(5,10,7).normalize()},uLightDirFill:{value:new A(-5,-5,-5).normalize()},uAmbient:{value:new yt(.5,.5,.5)},uShininess:{value:40},uOrtho:{value:!0}}})}function ex(i){let t=tx(),e=new Ji;return e.setAttribute("position",t.getAttribute("position")),e.setIndex(t.getIndex()),e.setAttribute("iPosA",new qe(new Float32Array(i*3),3)),e.setAttribute("iPosB",new qe(new Float32Array(i*3),3)),e.setAttribute("iRadius",new qe(new Float32Array(i),1)),e.setAttribute("iColorA",new qe(new Float32Array(i*3),3)),e.setAttribute("iColorB",new qe(new Float32Array(i*3),3)),e.instanceCount=i,e}var Jr=class extends se{constructor(t,e){let n=ex(t);super(n,e),this.instGeom=n,this.iPosA=n.getAttribute("iPosA"),this.iPosB=n.getAttribute("iPosB"),this.iRadius=n.getAttribute("iRadius"),this.iColorA=n.getAttribute("iColorA"),this.iColorB=n.getAttribute("iColorB"),this.frustumCulled=!1}setInstance(t,e,n,s,r,o){let a=Array.isArray(e)?e[0]:e.x,l=Array.isArray(e)?e[1]:e.y,c=Array.isArray(e)?e[2]:e.z,h=Array.isArray(n)?n[0]:n.x,d=Array.isArray(n)?n[1]:n.y,u=Array.isArray(n)?n[2]:n.z;this.iPosA.setXYZ(t,a,l,c),this.iPosB.setXYZ(t,h,d,u),this.iRadius.setX(t,s),this.iColorA.setXYZ(t,r.r,r.g,r.b),this.iColorB.setXYZ(t,o.r,o.g,o.b)}commit(){this.iPosA.needsUpdate=!0,this.iPosB.needsUpdate=!0,this.iRadius.needsUpdate=!0,this.iColorA.needsUpdate=!0,this.iColorB.needsUpdate=!0}raycast(){}dispose(){this.instGeom.dispose()}};var Qr=class{constructor(t){this.deps=t;this.group=new re;this.geometries=[];this.localMaterials=[];this.impostorMeshes=[];this.currentImpostorMaterial=null}setVisible(t){this.group.visible=t}rebuild(t,e,n,s,r){if(this.clear(),n.length===0)return;if(r==="wireframe"||s==="line"){this.buildWireframe(t,e,n);return}let o=r==="stick"?.15:.08;this.deps.getImpostorEnabled()?this.buildImpostor(t,e,n,o,s):s==="unicolor"?this.buildUnicolor(t,e,n,o):this.buildBicolor(t,e,n,o)}dispose(){this.clear()}clear(){for(;this.group.children.length>0;)this.group.remove(this.group.children[0]);for(let t of this.geometries)t.dispose();for(let t of this.localMaterials)t.dispose();for(let t of this.impostorMeshes)t.dispose();this.geometries=[],this.localMaterials=[],this.impostorMeshes=[],this.currentImpostorMaterial=null,this.deps.registerImpostorMaterial(null)}buildImpostor(t,e,n,s,r){let o=Hh();this.localMaterials.push(o),this.currentImpostorMaterial=o,this.deps.registerImpostorMaterial(o);let a=new Jr(n.length,o),l=new yt,c=new yt,h=this.deps.getUnicolorColor();r==="unicolor"&&(l.set(h),c.set(h));for(let d=0;d<n.length;d++){let u=n[d];r==="bicolor"&&(l.set(this.deps.getElementColor(t[u.i])),c.set(this.deps.getElementColor(t[u.j]))),a.setInstance(d,e[u.i],e[u.j],s,l,c)}a.commit(),this.impostorMeshes.push(a),this.group.add(a)}buildBicolor(t,e,n,s){let r=new Map;for(let c of n){let h=new A(...e[c.i]),d=new A(...e[c.j]),u=h.clone().lerp(d,.5),p=c.distance/2,g=this.deps.getElementColor(t[c.i]),x=this.deps.getElementColor(t[c.j]);r.has(g)||r.set(g,[]),r.get(g).push({position:h,target:u,length:p}),r.has(x)||r.set(x,[]),r.get(x).push({position:u,target:d,length:p})}let o=this.deps.getCylinderSegments(t.length),a=new Ye(s,s,1,o);a.translate(0,.5,0),a.rotateX(Math.PI/2),this.geometries.push(a);let l=new ue;for(let[c,h]of r){let d=this.deps.getPhongMaterial(c,40),u=new me(a,d,h.length);for(let p=0;p<h.length;p++){let g=h[p];l.position.copy(g.position),l.scale.set(1,1,g.length),l.lookAt(g.target),l.updateMatrix(),u.setMatrixAt(p,l.matrix)}u.instanceMatrix.needsUpdate=!0,this.group.add(u)}}buildUnicolor(t,e,n,s){let r=this.deps.getCylinderSegments(t.length),o=new Ye(s,s,1,r);o.translate(0,.5,0),o.rotateX(Math.PI/2),this.geometries.push(o);let a=this.deps.getPhongMaterial(this.deps.getUnicolorColor(),40),l=new me(o,a,n.length),c=new ue;for(let h=0;h<n.length;h++){let d=new A(...e[n[h].i]),u=new A(...e[n[h].j]);c.position.copy(d),c.scale.set(1,1,n[h].distance),c.lookAt(u),c.updateMatrix(),l.setMatrixAt(h,c.matrix)}l.instanceMatrix.needsUpdate=!0,this.group.add(l)}buildWireframe(t,e,n){let s=[],r=[];for(let l of n){let c=e[l.i],h=e[l.j],d=[(c[0]+h[0])/2,(c[1]+h[1])/2,(c[2]+h[2])/2],u=new yt(this.deps.getElementColor(t[l.i])),p=new yt(this.deps.getElementColor(t[l.j]));s.push(c[0],c[1],c[2],d[0],d[1],d[2]),r.push(u.r,u.g,u.b,u.r,u.g,u.b),s.push(d[0],d[1],d[2],h[0],h[1],h[2]),r.push(p.r,p.g,p.b,p.r,p.g,p.b)}if(s.length===0)return;let o=new qt;o.setAttribute("position",new oe(s,3)),o.setAttribute("color",new oe(r,3)),this.geometries.push(o);let a=new fn({vertexColors:!0});this.localMaterials.push(a),this.group.add(new Cn(o,a))}};var nx=`
out vec3 vCenterView;
out float vRadius;
out vec3 vRayView;
out vec3 vColor;

void main() {
  vec4 instCenter = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  // Uniform scale lives in any column's length; use column X.
  vec3 col0 = (instanceMatrix * vec4(1.0, 0.0, 0.0, 0.0)).xyz;
  float radius = length(col0);

  vCenterView = (viewMatrix * instCenter).xyz;
  vRadius = radius;
  vColor = instanceColor;

  vec3 posView = vCenterView + vec3(position.xy * radius, 0.0);
  vRayView = posView;
  gl_Position = projectionMatrix * vec4(posView, 1.0);
}
`,ix=`
precision highp float;

in vec3 vCenterView;
in float vRadius;
in vec3 vRayView;
in vec3 vColor;

out vec4 fragColor;

// sRGB encoding \u2014 three.js applies this to built-in materials via
// <colorspace_fragment>, which isn't injected into ShaderMaterial. Without it
// our linear output is rendered raw and the browser displays it as sRGB, which
// reads as oversaturated / high-contrast compared to the Phong path.
vec3 linearToSRGB(vec3 c) {
  c = max(c, vec3(0.0));
  vec3 cutoff = step(vec3(0.0031308), c);
  vec3 hi = 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055;
  vec3 lo = c * 12.92;
  return mix(lo, hi, cutoff);
}

// Three.js auto-injects viewMatrix/cameraPosition/isOrthographic into the
// fragment prefix but NOT projectionMatrix / modelViewMatrix, so we declare
// it here; Three.js sets the uniform at the program level.
uniform mat4 projectionMatrix;
uniform vec3 uLightDir;
uniform vec3 uLightDirFill;
uniform vec3 uAmbient;
uniform float uShininess;
uniform bool uOrtho;

void main() {
  vec3 rayOrigin;
  vec3 rayDir;
  if (uOrtho) {
    rayOrigin = vec3(vRayView.xy, 0.0);
    rayDir = vec3(0.0, 0.0, -1.0);
  } else {
    rayOrigin = vec3(0.0);
    rayDir = normalize(vRayView);
  }

  vec3 oc = rayOrigin - vCenterView;
  float b = dot(oc, rayDir);
  float c = dot(oc, oc) - vRadius * vRadius;
  float disc = b * b - c;
  if (disc < 0.0) discard;
  float t = -b - sqrt(disc);
  if (t < 0.0) discard;

  vec3 hitView = rayOrigin + t * rayDir;
  vec3 normalView = normalize(hitView - vCenterView);

  // Match three's Phong pipeline exactly: every diffuse term (ambient +
  // directional lights) passes through BRDF_Lambert = color * RECIPROCAL_PI.
  // Previously we applied 1/\u03C0 to directional diffuse only, leaving ambient
  // ~\u03C0\xD7 too bright \u2014 which read as "rich/vivid" next to the Phong path.
  const float RECIPROCAL_PI = 0.31830988618;
  vec3 L = normalize(uLightDir);
  vec3 LF = normalize(uLightDirFill);
  float ndotl = max(dot(normalView, L), 0.0);
  float ndotlFill = max(dot(normalView, LF), 0.0);
  vec3 color = vColor * (uAmbient + vec3(ndotl * 0.8 + ndotlFill * 0.3)) * RECIPROCAL_PI;
  if (ndotl > 0.0) {
    vec3 R = reflect(-L, normalView);
    vec3 V = -normalize(hitView);
    float spec = pow(max(dot(R, V), 0.0), uShininess);
    color += vec3(1.0) * spec * 0.067;
  }

  fragColor = vec4(linearToSRGB(color), 1.0);

  vec4 clip = projectionMatrix * vec4(hitView, 1.0);
  float ndcZ = clip.z / clip.w;
  gl_FragDepth = ndcZ * 0.5 + 0.5;
}
`,Al=null;function sx(){if(Al)return Al;let i=new qt,t=new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]);return i.setAttribute("position",new ce(t,3)),i.setIndex([0,1,2,0,2,3]),Al=i,i}function Vh(){return new Se({vertexShader:nx,fragmentShader:ix,glslVersion:Tn,uniforms:{uLightDir:{value:new A(5,10,7).normalize()},uLightDirFill:{value:new A(-5,-5,-5).normalize()},uAmbient:{value:new yt(.5,.5,.5)},uShininess:{value:80},uOrtho:{value:!0}}})}var is=class extends me{constructor(t,e){super(sx(),e,t),this.frustumCulled=!1}raycast(t,e){if(this.count===0)return;let n=new Vt,s=new A,r=new A,o=new A,a=t.ray;for(let l=0;l<this.count;l++){this.getMatrixAt(l,n),s.setFromMatrixPosition(n),r.setFromMatrixScale(n);let c=r.x;s.applyMatrix4(this.matrixWorld),o.subVectors(a.origin,s);let h=o.dot(a.direction),d=o.dot(o)-c*c,u=h*h-d;if(u<0)continue;let p=-h-Math.sqrt(u);if(p<0||p<t.near||p>t.far)continue;let g=new A().copy(a.direction).multiplyScalar(p).add(a.origin);e.push({distance:p,point:g,object:this,instanceId:l})}}};function kh(i){let t=[[i[0][0],i[0][1],i[0][2]],[i[1][0],i[1][1],i[1][2]],[i[2][0],i[2][1],i[2][2]]],e=[[1,0,0],[0,1,0],[0,0,1]];for(let n=0;n<50&&!(t[0][1]*t[0][1]+t[0][2]*t[0][2]+t[1][2]*t[1][2]<1e-10);n++)for(let r=0;r<2;r++)for(let o=r+1;o<3;o++){let a=t[r][o];if(Math.abs(a)<1e-10)continue;let l=t[r][r],c=t[o][o],h;if(Math.abs(l-c)<1e-30)h=a>=0?1:-1;else{let f=(c-l)/(2*a);h=(f>=0?1:-1)/(Math.abs(f)+Math.sqrt(f*f+1))}let d=1/Math.sqrt(h*h+1),u=h*d,p=u/(1+d);t[r][r]=l-h*a,t[o][o]=c+h*a,t[r][o]=0,t[o][r]=0;let g=3-r-o,x=t[g][r],m=t[g][o];t[g][r]=x-u*(m+p*x),t[r][g]=t[g][r],t[g][o]=m+u*(x-p*m),t[o][g]=t[g][o];for(let f=0;f<3;f++){let y=e[f][r],v=e[f][o];e[f][r]=y-u*(v+p*y),e[f][o]=v+u*(y-p*v)}}return{values:[t[0][0],t[1][1],t[2][2]],vectors:[[e[0][0],e[1][0],e[2][0]],[e[0][1],e[1][1],e[2][1]],[e[0][2],e[1][2],e[2][2]]]}}var rx=Math.sqrt(2.366),ox=Math.sqrt(6.251),to=class{constructor(){this.group=new re;this.materials=new Map;this.contour=.5;this.sphereGeo=new Ze(1,24,16)}setProbabilityContour(t){this.contour=t}getProbabilityContour(){return this.contour}rebuild(t,e){this.clear();let n=this.contour===.9?ox:rx;for(let[s,r]of t){if(r.length===0)continue;let o=e(s),a=new ve({color:new yt(o),shininess:30});this.materials.set(s,a);let l=new me(this.sphereGeo,a,r.length);l.frustumCulled=!0;let c=new Vt;for(let h=0;h<r.length;h++){let d=ax(r[h],n);c.fromArray(d),l.setMatrixAt(h,c)}l.instanceMatrix.needsUpdate=!0,l.computeBoundingSphere(),this.group.add(l)}}setVisible(t){this.group.visible=t}clear(){for(let t of[...this.group.children])this.group.remove(t);for(let t of this.materials.values())t.dispose();this.materials.clear()}dispose(){this.clear(),this.sphereGeo.dispose()}};function ax(i,t){let{U11:e,U22:n,U33:s,U12:r,U13:o,U23:a}=i.uij,c=kh([[e,r,o],[r,n,a],[o,a,s]]),h=Math.sqrt(Math.max(c.values[0],0)),d=Math.sqrt(Math.max(c.values[1],0)),u=Math.sqrt(Math.max(c.values[2],0));for(let C of c.values)if(C<-1e-4){console.warn(`[ellipsoid] non-PSD U\u1D62\u2C7C encountered, \u03BB=${C}; clamping at 0. Site:`,i.position);break}let p=c.vectors[0],g=c.vectors[1],x=c.vectors[2];p[0]*(g[1]*x[2]-g[2]*x[1])-p[1]*(g[0]*x[2]-g[2]*x[0])+p[2]*(g[0]*x[1]-g[1]*x[0])<0&&(x[0]=-x[0],x[1]=-x[1],x[2]=-x[2]);let f=t*h,y=t*d,v=t*u,_=i.position;return[p[0]*f,p[1]*f,p[2]*f,0,g[0]*y,g[1]*y,g[2]*y,0,x[0]*v,x[1]*v,x[2]*v,0,_[0],_[1],_[2],1]}var lx=[.93,.6,.13],Gh=1e-4,cx=1,Wh=.06,hx=.18,ux=.35,eo=class{constructor(){this.group=new re;this.colormap="redblue";this.scale=cx;this.shaftGeo=new Ye(Wh,Wh,1,12,1,!1),this.tipGeo=new Zn(hx,ux,16),this.shaftMat=new ve({color:16777215,shininess:30}),this.tipMat=new ve({color:16777215,shininess:30})}setColormap(t){this.colormap=t}getColormap(){return this.colormap}setScale(t){this.scale=t}getScale(){return this.scale}rebuild(t){if(this.clear(),t.length===0)return;let e=t.filter(u=>Rl(u.vector)>=Gh);if(e.length===0)return;let n=0;for(let u of e){let p=Rl(u.vector);p>n&&(n=p)}n<Gh&&(n=1);let s=new me(this.shaftGeo,this.shaftMat,e.length),r=new me(this.tipGeo,this.tipMat,e.length);s.frustumCulled=!0,r.frustumCulled=!0;let o=new A(0,1,0),a=new A,l=new xe,c=new Vt,h=new Vt,d=new yt;for(let u=0;u<e.length;u++){let p=e[u],g=Rl(p.vector),x=g*this.scale;a.set(p.vector[0],p.vector[1],p.vector[2]).normalize(),l.setFromUnitVectors(o,a);let m=p.position[0]+.5*x*a.x,f=p.position[1]+.5*x*a.y,y=p.position[2]+.5*x*a.z;c.compose(new A(m,f,y),l,new A(1,x,1)),s.setMatrixAt(u,c);let v=p.position[0]+x*a.x,_=p.position[1]+x*a.y,C=p.position[2]+x*a.z;h.compose(new A(v,_,C),l,new A(1,1,1)),r.setMatrixAt(u,h);let S=dx(this.colormap,p.vector,g,n);d.setRGB(S[0],S[1],S[2]),s.setColorAt(u,d),r.setColorAt(u,d)}s.instanceMatrix.needsUpdate=!0,r.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),r.instanceColor&&(r.instanceColor.needsUpdate=!0),s.computeBoundingSphere(),r.computeBoundingSphere(),this.group.add(s,r)}setVisible(t){this.group.visible=t}clear(){for(let t of[...this.group.children])this.group.remove(t)}dispose(){this.clear(),this.shaftGeo.dispose(),this.tipGeo.dispose(),this.shaftMat.dispose(),this.tipMat.dispose()}};function Rl(i){return Math.sqrt(i[0]*i[0]+i[1]*i[1]+i[2]*i[2])}function dx(i,t,e,n){if(i==="single")return lx;let s=e/n;return i==="viridis"?fx(s,[[.267,.005,.329],[.231,.322,.545],[.129,.569,.549],[.992,.906,.144]]):(t[2]>=0?1:-1)>0?[1,1-s,1-s]:[1-s,1-s,1]}function fx(i,t){if(i<=0)return t[0];if(i>=1)return t[t.length-1];let e=i*(t.length-1),n=Math.floor(e),s=e-n,r=t[n],o=t[n+1];return[r[0]+s*(o[0]-r[0]),r[1]+s*(o[1]-r[1]),r[2]+s*(o[2]-r[2])]}var Xh=.05,px=1,qh=.05,mx=.14,gx=.3,xx=[[.267,.005,.329],[.231,.322,.545],[.129,.569,.549],[.992,.906,.144]];function _x(i,t){if(i<=0)return t[0];if(i>=1)return t[t.length-1];let e=i*(t.length-1),n=Math.floor(e),s=e-n,r=t[n],o=t[n+1];return[r[0]+s*(o[0]-r[0]),r[1]+s*(o[1]-r[1]),r[2]+s*(o[2]-r[2])]}var no=class{constructor(){this.group=new re;this.shaftGeo=new Ye(qh,qh,1,12,1,!1),this.tipGeo=new Zn(mx,gx,16),this.shaftMat=new ve({color:16777215,shininess:30}),this.tipMat=new ve({color:16777215,shininess:30})}rebuild(t,e,n=px){if(this.clear(),t.length===0)return;let s=[],r=0;for(let g of t){let x=g.displacement,m=Math.sqrt(x[0]*x[0]+x[1]*x[1]+x[2]*x[2]);m<Xh||(m>r&&(r=m),s.push({pos:e[g.a],dir:x,mag:m}))}if(s.length===0)return;r<Xh&&(r=1);let o=new me(this.shaftGeo,this.shaftMat,s.length),a=new me(this.tipGeo,this.tipMat,s.length);o.frustumCulled=!0,a.frustumCulled=!0;let l=new A(0,1,0),c=new A,h=new xe,d=new Vt,u=new Vt,p=new yt;for(let g=0;g<s.length;g++){let x=s[g],m=x.mag*n;c.set(x.dir[0],x.dir[1],x.dir[2]).normalize(),h.setFromUnitVectors(l,c),d.compose(new A(x.pos[0]+.5*m*c.x,x.pos[1]+.5*m*c.y,x.pos[2]+.5*m*c.z),h,new A(1,m,1)),o.setMatrixAt(g,d),u.compose(new A(x.pos[0]+m*c.x,x.pos[1]+m*c.y,x.pos[2]+m*c.z),h,new A(1,1,1)),a.setMatrixAt(g,u);let f=_x(x.mag/r,xx);p.setRGB(f[0],f[1],f[2]),o.setColorAt(g,p),a.setColorAt(g,p)}o.instanceMatrix.needsUpdate=!0,a.instanceMatrix.needsUpdate=!0,o.instanceColor&&(o.instanceColor.needsUpdate=!0),a.instanceColor&&(a.instanceColor.needsUpdate=!0),o.computeBoundingSphere(),a.computeBoundingSphere(),this.group.add(o,a)}clear(){for(let t of[...this.group.children])this.group.remove(t)}dispose(){this.clear(),this.shaftGeo.dispose(),this.tipGeo.dispose(),this.shaftMat.dispose(),this.tipMat.dispose()}};function Yh(i,t,e,n,s=2,r){let o=[],a=[],l=s*s,c=new Set,h=new Map;for(let p=0;p<e.length;p++){let g=e[p],x=h.get(g);x||(x=[],h.set(g,x)),x.push(p)}let d=r!==void 0&&vx(r),u=new Map;if(!d)for(let[p,g]of h)g.length>100&&u.set(p,Mx(g,n,s));for(let p=0;p<i.length;p++){let g=i[p],x=h.get(g);if(!x||x.length===0){a.push(p);continue}let m=-1,f=l,y=[0,0,0],v=u.get(g),_=v?Ex(v,t[p],n):x;for(let C of _){if(c.has(C))continue;let S=n[C][0]-t[p][0],T=n[C][1]-t[p][1],I=n[C][2]-t[p][2];if(d){let b=yx(S,T,I,r);S=b[0],T=b[1],I=b[2]}let M=S*S+T*T+I*I;M<f&&(f=M,m=C,y=[S,T,I])}if(m===-1){a.push(p);continue}c.add(m),o.push({a:p,b:m,displacement:y})}return{pairs:o,unmatched:a}}function yx(i,t,e,n){let s=n[0],r=n[1],o=n[2],a=s[0]*(r[1]*o[2]-r[2]*o[1])-s[1]*(r[0]*o[2]-r[2]*o[0])+s[2]*(r[0]*o[1]-r[1]*o[0]);if(Math.abs(a)<1e-10)return[i,t,e];let l=1/a,c=((r[1]*o[2]-r[2]*o[1])*i+(r[2]*o[0]-r[0]*o[2])*t+(r[0]*o[1]-r[1]*o[0])*e)*l,h=((s[2]*o[1]-s[1]*o[2])*i+(s[0]*o[2]-s[2]*o[0])*t+(s[1]*o[0]-s[0]*o[1])*e)*l,d=((s[1]*r[2]-s[2]*r[1])*i+(s[2]*r[0]-s[0]*r[2])*t+(s[0]*r[1]-s[1]*r[0])*e)*l;return c-=Math.round(c),h-=Math.round(h),d-=Math.round(d),[c*s[0]+h*r[0]+d*o[0],c*s[1]+h*r[1]+d*o[1],c*s[2]+h*r[2]+d*o[2]]}function vx(i){if(i.length!==3)return!1;let t=i[0],e=i[1],n=i[2],s=t[0]*(e[1]*n[2]-e[2]*n[1])-t[1]*(e[0]*n[2]-e[2]*n[0])+t[2]*(e[0]*n[1]-e[1]*n[0]);return Math.abs(s)>1e-9}function bx(i,t,e,n){return`${Math.floor(i/n)},${Math.floor(t/n)},${Math.floor(e/n)}`}function Mx(i,t,e){let n=Math.max(e,1),s=new Map;for(let r of i){let o=t[r],a=bx(o[0],o[1],o[2],n),l=s.get(a);l||(l=[],s.set(a,l)),l.push(r)}return{bins:s,binSize:n}}function Ex(i,t,e){let n=[],s=Math.floor(t[0]/i.binSize),r=Math.floor(t[1]/i.binSize),o=Math.floor(t[2]/i.binSize);for(let a=-1;a<=1;a++)for(let l=-1;l<=1;l++)for(let c=-1;c<=1;c++){let h=`${s+a},${r+l},${o+c}`,d=i.bins.get(h);d&&n.push(...d)}return n}var Zh=1e-4,Sx=1e-4;function $h(i,t){if(i.length===0)throw new Error("Wulff requires at least one plane");let n=[...i,...Rx(t)].map(a=>{let[l,c,h]=a.normal,d=Math.sqrt(l*l+c*c+h*h);if(d<1e-12)throw new Error(`Wulff plane has zero normal: ${a.normal}`);return{normal:[l/d,c/d,h/d],distance:a.distance/1}}),s=[],r=n.length;for(let a=0;a<r;a++)for(let l=a+1;l<r;l++)for(let c=l+1;c<r;c++){let h=wx(n[a],n[l],n[c]);h&&Tx(h,n)&&(Ax(s,h)||s.push(h))}if(s.length<4)throw new Error(`Wulff produced only ${s.length} vertices \u2014 input planes don't bound a region`);let o=s.map(a=>new A(a[0],a[1],a[2]));return new es(o)}function wx(i,t,e){let n=i.normal,s=t.normal,r=e.normal,o=n[0]*(s[1]*r[2]-s[2]*r[1])-n[1]*(s[0]*r[2]-s[2]*r[0])+n[2]*(s[0]*r[1]-s[1]*r[0]);if(Math.abs(o)<1e-10)return null;let a=1/o,l=i.distance,c=t.distance,h=e.distance,d=(l*(s[1]*r[2]-s[2]*r[1])-n[1]*(c*r[2]-s[2]*h)+n[2]*(c*r[1]-s[1]*h))*a,u=(n[0]*(c*r[2]-s[2]*h)-l*(s[0]*r[2]-s[2]*r[0])+n[2]*(s[0]*h-c*r[0]))*a,p=(n[0]*(s[1]*h-c*r[1])-n[1]*(s[0]*h-c*r[0])+l*(s[0]*r[1]-s[1]*r[0]))*a;return[d,u,p]}function Tx(i,t){for(let e of t)if(i[0]*e.normal[0]+i[1]*e.normal[1]+i[2]*e.normal[2]>e.distance+Sx)return!1;return!0}function Ax(i,t){for(let e of i){let n=e[0]-t[0],s=e[1]-t[1],r=e[2]-t[2];if(n*n+s*s+r*r<Zh*Zh)return!0}return!1}function Rx(i){let t=i*.5;return[{normal:[1,0,0],distance:t},{normal:[-1,0,0],distance:t},{normal:[0,1,0],distance:t},{normal:[0,-1,0],distance:t},{normal:[0,0,1],distance:t},{normal:[0,0,-1],distance:t}]}function jh(i,t){let e=t[0],n=t[1],s=t[2],r=e[0]*(n[1]*s[2]-n[2]*s[1])-e[1]*(n[0]*s[2]-n[2]*s[0])+e[2]*(n[0]*s[1]-n[1]*s[0]);if(Math.abs(r)<1e-12)throw new Error("Wulff: lattice is singular (zero cell volume)");let o=1/r,a=[(n[1]*s[2]-n[2]*s[1])*o,(n[2]*s[0]-n[0]*s[2])*o,(n[0]*s[1]-n[1]*s[0])*o],l=[(s[1]*e[2]-s[2]*e[1])*o,(s[2]*e[0]-s[0]*e[2])*o,(s[0]*e[1]-s[1]*e[0])*o],c=[(e[1]*n[2]-e[2]*n[1])*o,(e[2]*n[0]-e[0]*n[2])*o,(e[0]*n[1]-e[1]*n[0])*o];return i.map(({h,k:d,l:u,gamma:p})=>({normal:[h*a[0]+d*l[0]+u*c[0],h*a[1]+d*l[1]+u*c[1],h*a[2]+d*l[2]+u*c[2]],distance:p}))}var Cx=`
in vec3 iPickColor;

out vec3 vCenterView;
out float vRadius;
out vec3 vRayView;
out vec3 vPickColor;

void main() {
  vec4 instCenter = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  vec3 col0 = (instanceMatrix * vec4(1.0, 0.0, 0.0, 0.0)).xyz;
  float radius = length(col0);
  vCenterView = (viewMatrix * instCenter).xyz;
  vRadius = radius;
  vPickColor = iPickColor;
  vec3 posView = vCenterView + vec3(position.xy * radius, 0.0);
  vRayView = posView;
  gl_Position = projectionMatrix * vec4(posView, 1.0);
}
`,Px=`
precision highp float;

in vec3 vCenterView;
in float vRadius;
in vec3 vRayView;
in vec3 vPickColor;

out vec4 fragColor;

uniform mat4 projectionMatrix;
uniform bool uOrtho;

void main() {
  vec3 rayOrigin;
  vec3 rayDir;
  if (uOrtho) {
    rayOrigin = vec3(vRayView.xy, 0.0);
    rayDir = vec3(0.0, 0.0, -1.0);
  } else {
    rayOrigin = vec3(0.0);
    rayDir = normalize(vRayView);
  }
  vec3 oc = rayOrigin - vCenterView;
  float b = dot(oc, rayDir);
  float c = dot(oc, oc) - vRadius * vRadius;
  float disc = b * b - c;
  if (disc < 0.0) discard;
  float t = -b - sqrt(disc);
  if (t < 0.0) discard;
  vec3 hitView = rayOrigin + t * rayDir;

  fragColor = vec4(vPickColor, 1.0);

  vec4 clip = projectionMatrix * vec4(hitView, 1.0);
  float ndcZ = clip.z / clip.w;
  gl_FragDepth = ndcZ * 0.5 + 0.5;
}
`,Ix=`
in vec3 iPickColor;
out vec3 vPickColor;
void main() {
  vPickColor = iPickColor;
  gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
}
`,Lx=`
precision highp float;
in vec3 vPickColor;
out vec4 fragColor;
void main() {
  fragColor = vec4(vPickColor, 1.0);
}
`;function Dx(i){let t=i+1;return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}function Ux(i){return new Se({vertexShader:Cx,fragmentShader:Px,glslVersion:Tn,uniforms:{uOrtho:{value:i}}})}function Fx(){return new Se({vertexShader:Ix,fragmentShader:Lx,glslVersion:Tn})}var Cl=null;function Nx(){if(Cl)return Cl;let i=new qt,t=new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]);return i.setAttribute("position",new ce(t,3)),i.setIndex([0,1,2,0,2,3]),Cl=i,i}var io=null;function Ox(){return io||(io=new Ze(1,12,8),io)}var so=class{constructor(){this.pickScene=new qn;this.target=new sn(1,1,{format:Ve,type:nn,depthBuffer:!0,stencilBuffer:!1});this.readBuffer=new Uint8Array(4);this.meshes=[];this.geometries=[];this.materials=[]}rebuild(t,e,n){this.clear();for(let s of t){let r=s.globalIndices.length;if(r===0)continue;let o=s.mesh instanceof is,a=o?Nx():Ox(),l=new Ji;l.setAttribute("position",a.getAttribute("position"));let c=a.getIndex();c&&l.setIndex(c);let h=new qe(new Float32Array(r*3),3);for(let g=0;g<r;g++){let[x,m,f]=Dx(s.globalIndices[g]);h.setXYZ(g,x,m,f)}l.setAttribute("iPickColor",h),l.instanceCount=r,this.geometries.push(l);let d=o?Ux(n):Fx();this.materials.push(d);let u=new me(l,d,r),p=new Vt;for(let g=0;g<r;g++)s.mesh.getMatrixAt(g,p),u.setMatrixAt(g,p);u.instanceMatrix.needsUpdate=!0,u.frustumCulled=!o,this.meshes.push(u),this.pickScene.add(u)}}setOrtho(t){for(let e of this.materials)e.uniforms.uOrtho&&(e.uniforms.uOrtho.value=t)}pickAt(t,e,n,s,r){if(this.meshes.length===0)return-1;let o=n.getBoundingClientRect(),a=Math.floor((t-o.left)*(n.width/o.width)),l=Math.floor((e-o.top)*(n.height/o.height));if(a<0||l<0||a>=n.width||l>=n.height)return-1;let c=n.width,h=n.height;s.setViewOffset(c,h,a,l,1,1),s.updateProjectionMatrix();let d=r.getRenderTarget(),u=new yt;r.getClearColor(u);let p=r.getClearAlpha(),g=r.getScissorTest();r.setRenderTarget(this.target),r.setScissorTest(!1),r.setClearColor(0,0),r.clear(),r.render(this.pickScene,s),r.readRenderTargetPixels(this.target,0,0,1,1,this.readBuffer),r.setRenderTarget(d),r.setClearColor(u,p),r.setScissorTest(g),s.clearViewOffset(),s.updateProjectionMatrix();let x=this.readBuffer[0]<<16|this.readBuffer[1]<<8|this.readBuffer[2];return x===0?-1:x-1}dispose(){this.clear(),this.target.dispose()}clear(){for(let t of this.meshes)this.pickScene.remove(t);for(let t of this.geometries)t.dispose();for(let t of this.materials)t.dispose();this.meshes=[],this.geometries=[],this.materials=[]}};function Bx(i,t){if(i.length===0)return{rmsd:0,maxDisplacement:0,meanDisplacement:0,p95Displacement:0,matchedCount:0,unmatchedCount:t};let e=new Array(i.length),n=0,s=0,r=0;for(let a=0;a<i.length;a++){let l=i[a].displacement,c=l[0]*l[0]+l[1]*l[1]+l[2]*l[2],h=Math.sqrt(c);e[a]=h,n+=c,r+=h,h>s&&(s=h)}e.sort((a,l)=>a-l);let o=e[Math.min(e.length-1,Math.floor(.95*e.length))];return{rmsd:Math.sqrt(n/i.length),maxDisplacement:s,meanDisplacement:r/i.length,p95Displacement:o,matchedCount:i.length,unmatchedCount:t}}var zx=5e3,oo=class oo{constructor(t){this.cameraMode="orthographic";this.atomGroup=new re;this.bondRenderer=new Qr({getElementColor:t=>this.getElementColor(t),getPhongMaterial:(t,e)=>this.getMaterial(t,e),getCylinderSegments:t=>this.getCylinderSegments(t),getUnicolorColor:()=>this.paletteColors().bondUnicolor,getImpostorEnabled:()=>this.impostorEnabled,registerImpostorMaterial:t=>{this.bondImpostorMaterial=t,t&&(t.uniforms.uOrtho.value=this.cameraMode==="orthographic")}});this.cellGroup=new re;this.labelGroup=new re;this.polyhedraGroup=new re;this.measureGroup=new re;this.planeGroup=new re;this.isoGroup=new re;this.structure=null;this.supercell=[1,1,1];this.showBonds=!0;this.showLabels=!1;this.showPolyhedra=!1;this.showBoundaryAtoms=!0;this.showCellDash=!0;this.displayStyle="ball-and-stick";this.bondStyle="bicolor";this.interactionMode="navigate";this.impostorEnabled=!0;this.currentImpostorMaterial=null;this.bondImpostorMaterial=null;this.ellipsoidRenderer=new to;this.showEllipsoids=!1;this.showPartialOccupancy=!1;this.vectorArrowRenderer=new eo;this.showAtomVectors=!1;this.wulffGroup=new re;this.currentWulffPlanes=null;this.trajectory=null;this.currentFrameIndex=0;this.secondaryPhasesGroup=new re;this.secondaryPhases=[];this.displacementArrowRenderer=new no;this.comparisonActive=!1;this.comparisonSecondaryPhase=null;this.lastComparisonStats=null;this.recomputeBondsPerFrame=!1;this.elementColorOverrides=new Map;this.elementRadiusOverrides=new Map;this.elementVisibility=new Map;this.colorPalette="dark";this.polyhedraCenters=new Set;this.polyhedraCentersUserSet=!1;this.renderRequested=!1;this.materialCache=new Map;this.geometries=[];this.textures=[];this.materials=[];this.expandedSpecies=[];this.expandedPositions=[];this.expandedUnitCellIndex=[];this.cachedBonds=[];this.bondParams=new Map;this.labelTextureCache=new Map;this.animating=!1;this.raycaster=new Or;this.selectedAtoms=[];this.measurements=[];this.onAtomSelect=null;this.onMeasurement=null;this.atomMeshMap=[];this.axisIndicator=new Kr;this.pickingRenderer=new so;this.volumetricData=null;this.isoLevel=0;this.forceBonds=!1;this.viewportShiftPx=0;this.canvas=t,this.scene=new qn;let e=t.clientWidth/t.clientHeight;this.perspCamera=new Re(50,e,.1,500),this.perspCamera.position.set(0,0,20);let n=20;this.orthoCamera=new Xn(-n*e/2,n*e/2,n/2,-n/2,.1,500),this.orthoCamera.position.set(0,0,20),this.activeCamera=this.orthoCamera,this.renderer=new Ir({canvas:t,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(t.clientWidth,t.clientHeight,!1);let s=this.getBackgroundColor();this.scene.fog=new $i(s,.015);let r=new Ki(16777215,.5),o=new Rs(16777215,.8);o.position.set(5,10,7);let a=new Rs(16777215,.3);a.position.set(-5,-5,-5),this.scene.add(r,o,a),this.scene.add(this.atomGroup,this.bondRenderer.group,this.cellGroup,this.labelGroup,this.polyhedraGroup,this.measureGroup,this.planeGroup,this.isoGroup,this.ellipsoidRenderer.group,this.vectorArrowRenderer.group,this.wulffGroup,this.secondaryPhasesGroup,this.displacementArrowRenderer.group),this.labelGroup.renderOrder=999,this.labelGroup.visible=!1,this.polyhedraGroup.visible=!1,this.controls=new Wr(this.activeCamera,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.1,this.controls.enableRotate=!1,this.controls.addEventListener("change",()=>this.requestRender()),this.initAxisIndicator();let l=new ResizeObserver(()=>this.onResize());l.observe(t),t.parentElement&&l.observe(t.parentElement),t.addEventListener("click",c=>this.onCanvasClick(c)),this.initFreeRotation(t),this.requestRender()}loadStructure(t){this.structure=t,this.trajectory=null,this.currentFrameIndex=0,this.bondParams.clear(),this.selectedAtoms=[],this.clearMeasurements(),this.updateAxisIndicator(),this.rebuild()}loadTrajectory(t){t.frames.length!==0&&(this.trajectory=t,this.currentFrameIndex=0,this.structure=t.frames[0],this.bondParams.clear(),this.selectedAtoms=[],this.clearMeasurements(),this.updateAxisIndicator(),this.rebuild())}setFrame(t){if(!this.trajectory)return;let e=Math.max(0,Math.min(t,this.trajectory.frames.length-1));e!==this.currentFrameIndex&&(this.currentFrameIndex=e,this.structure=this.trajectory.frames[e],this.trajectory.latticeMode==="per-frame"&&this.updateAxisIndicator(),this.rebuild(!1,!this.recomputeBondsPerFrame),this.comparisonActive&&this.recomputeComparison())}setRecomputeBondsPerFrame(t){this.recomputeBondsPerFrame=t}getRecomputeBondsPerFrame(){return this.recomputeBondsPerFrame}getAtomCount(){return this.structure?this.structure.species.length:0}addPhase(t,e=[0,0,0],n=.5){this.secondaryPhases.push({struct:t,offset:e,opacity:n}),this.rebuildSecondaryPhases()}clearPhases(){this.secondaryPhases=[],this.comparisonActive&&this.clearComparison(),this.rebuildSecondaryPhases()}getPhaseCount(){return this.secondaryPhases.length}getPhases(){return this.secondaryPhases.map(t=>({atomCount:t.struct.species.length,opacity:t.opacity,visible:t._visible!==!1}))}setPhaseVisible(t,e){t<0||t>=this.secondaryPhases.length||(this.secondaryPhases[t]._visible=e,this.rebuildSecondaryPhases())}setPhaseOpacity(t,e){t<0||t>=this.secondaryPhases.length||(this.secondaryPhases[t].opacity=Math.max(0,Math.min(1,e)),this.rebuildSecondaryPhases())}removePhase(t){if(t<0||t>=this.secondaryPhases.length)return;let e=t===0;this.secondaryPhases.splice(t,1),this.comparisonActive&&(e||this.secondaryPhases.length===0)&&this.clearComparison(),this.rebuildSecondaryPhases()}compareToPhase(){return this.secondaryPhases.length===0?{ok:!1,reason:'no secondary phase \u2014 run "MatViz: Add Phase" first'}:this.getAtomCount()>5e3?{ok:!1,reason:"atom count > 5000 \u2014 comparison disabled for perf"}:(this.comparisonActive=!0,this.comparisonSecondaryPhase=this.secondaryPhases[0],this.recomputeComparison(),{ok:!0})}clearComparison(){this.comparisonActive=!1,this.comparisonSecondaryPhase=null,this.lastComparisonStats=null,this.displacementArrowRenderer.clear(),this.requestRender()}isComparisonActive(){return this.comparisonActive}getComparisonStats(){return this.lastComparisonStats}recomputeComparison(){if(!this.comparisonActive||!this.comparisonSecondaryPhase||!this.structure)return;let t=this.comparisonSecondaryPhase,e=t.struct.positions.map(o=>[o[0]+t.offset[0],o[1]+t.offset[1],o[2]+t.offset[2]]),s=this.structure.lattice===t.struct.lattice?this.structure.lattice:void 0,r=Yh(this.structure.species,this.structure.positions,t.struct.species,e,void 0,s);this.displacementArrowRenderer.rebuild(r.pairs,this.structure.positions),this.lastComparisonStats=Bx(r.pairs,r.unmatched.length),this.requestRender()}rebuildSecondaryPhases(){for(let e of[...this.secondaryPhasesGroup.children]){this.secondaryPhasesGroup.remove(e);let n=e;n.geometry&&n.geometry.dispose();let s=n.material;s&&typeof s.dispose=="function"&&s.dispose()}if(this.secondaryPhases.length===0){this.requestRender();return}let t=new Ze(1,16,12);for(let e of this.secondaryPhases){if(e._visible===!1)continue;let n=new Map;for(let s=0;s<e.struct.species.length;s++){let r=e.struct.species[s];n.has(r)||n.set(r,[]),n.get(r).push(s)}for(let[s,r]of n){let o=Pn(s),a=this.getElementColor(s),l=new ve({color:new yt(a),shininess:30,transparent:!0,opacity:e.opacity,depthWrite:!1}),c=new me(t,l,r.length),h=new ue,d=o.displayRadius;for(let u=0;u<r.length;u++){let p=r[u],g=e.struct.positions[p];h.position.set(g[0]+e.offset[0],g[1]+e.offset[1],g[2]+e.offset[2]),h.scale.setScalar(d),h.updateMatrix(),c.setMatrixAt(u,h.matrix)}c.instanceMatrix.needsUpdate=!0,c.computeBoundingSphere(),c.renderOrder=1,this.secondaryPhasesGroup.add(c)}}this.requestRender()}getFrameCount(){return this.trajectory?this.trajectory.frames.length:this.structure?1:0}getCurrentFrame(){return this.currentFrameIndex}hasTrajectory(){return this.trajectory!==null&&this.trajectory.frames.length>1}setSupercell(t){this.supercell=t,this.structure&&(this.selectedAtoms=[],this.clearMeasurements(),this.rebuild())}toggleBonds(){if(this.showBonds=!this.showBonds,this.showBonds&&this.bondRenderer.group.children.length===0&&this.cachedBonds.length>0){this.buildVisuals();return}this.bondRenderer.setVisible(this.showBonds&&this.displayStyle!=="space-filling"),this.requestRender()}setShowBonds(t){t!==this.showBonds&&this.toggleBonds()}resetCamera(){this.structure&&(this.fitCamera(),this.requestRender())}setDisplayStyle(t){t!==this.displayStyle&&(this.displayStyle=t,this.structure&&this.buildVisuals())}getDisplayStyle(){return this.displayStyle}setCameraMode(t){if(t===this.cameraMode)return;this.cameraMode=t;let e=this.activeCamera;this.activeCamera=t==="orthographic"?this.orthoCamera:this.perspCamera,this.activeCamera.position.copy(e.position),this.activeCamera.lookAt(this.controls.target),this.controls.object=this.activeCamera,this.controls.update();let n=t==="orthographic";this.currentImpostorMaterial&&(this.currentImpostorMaterial.uniforms.uOrtho.value=n),this.bondImpostorMaterial&&(this.bondImpostorMaterial.uniforms.uOrtho.value=n),this.pickingRenderer.setOrtho(n),this.requestRender()}getCameraMode(){return this.cameraMode}setImpostorEnabled(t){t!==this.impostorEnabled&&(this.impostorEnabled=t,this.structure&&this.buildVisuals())}getImpostorEnabled(){return this.impostorEnabled}setShowEllipsoids(t){t!==this.showEllipsoids&&(this.showEllipsoids=t,this.structure&&this.buildVisuals())}getShowEllipsoids(){return this.showEllipsoids}setProbabilityContour(t){t!==this.ellipsoidRenderer.getProbabilityContour()&&(this.ellipsoidRenderer.setProbabilityContour(t),this.structure&&this.showEllipsoids&&this.buildVisuals())}getProbabilityContour(){return this.ellipsoidRenderer.getProbabilityContour()}hasThermalAniso(){return!!this.structure?.thermalAniso?.some(t=>t!==null)}setShowPartialOccupancy(t){t!==this.showPartialOccupancy&&(this.showPartialOccupancy=t,this.structure&&this.buildVisuals())}getShowPartialOccupancy(){return this.showPartialOccupancy}hasPartialOccupancy(){return!!this.structure?.occupancy?.some(t=>t<1-1e-6)}setShowAtomVectors(t){t!==this.showAtomVectors&&(this.showAtomVectors=t,this.structure&&this.buildVisuals())}getShowAtomVectors(){return this.showAtomVectors}setVectorColormap(t){t!==this.vectorArrowRenderer.getColormap()&&(this.vectorArrowRenderer.setColormap(t),this.structure&&this.showAtomVectors&&this.buildVisuals())}getVectorColormap(){return this.vectorArrowRenderer.getColormap()}setVectorScale(t){t!==this.vectorArrowRenderer.getScale()&&(this.vectorArrowRenderer.setScale(t),this.structure&&this.showAtomVectors&&this.buildVisuals())}getVectorScale(){return this.vectorArrowRenderer.getScale()}hasAtomVectors(){return!!this.structure?.atomVectors?.values.some(t=>t[0]!==0||t[1]!==0||t[2]!==0)}getAtomVectorInfo(){let t=this.structure?.atomVectors;return t?{kind:t.kind,label:t.label,unit:t.unit}:null}setWulff(t){if(this.clearWulff(),!this.structure||t.length===0)return;let e=jh(t,this.structure.lattice),n=Math.max(...t.map(d=>d.gamma)),s=Math.max(n*4,5),r=$h(e,s);this.geometries.push(r);let o=new ve({color:5090295,shininess:60,transparent:!0,opacity:.5,side:Le,depthWrite:!1});this.materials.push(o);let a=new se(r,o),l=new As(r);this.geometries.push(l);let c=new fn({color:1667522,linewidth:2});this.materials.push(c);let h=new Cn(l,c);this.wulffGroup.add(a,h),this.currentWulffPlanes=t.slice(),this.requestRender()}clearWulff(){for(let t of[...this.wulffGroup.children])this.wulffGroup.remove(t);this.currentWulffPlanes=null,this.requestRender()}hasWulff(){return this.currentWulffPlanes!==null}toggleLabels(){this.showLabels=!this.showLabels,this.showLabels&&this.labelGroup.children.length===0&&this.expandedSpecies.length>0&&this.buildLabels(),this.labelGroup.visible=this.showLabels,this.requestRender()}togglePolyhedra(){this.showPolyhedra=!this.showPolyhedra,this.showPolyhedra&&this.polyhedraGroup.children.length===0&&this.cachedBonds.length>0&&this.buildPolyhedra(),this.polyhedraGroup.visible=this.showPolyhedra,this.requestRender()}toggleBoundaryAtoms(){this.showBoundaryAtoms=!this.showBoundaryAtoms,this.structure&&this.rebuild(!1)}setShowBoundaryAtoms(t){t!==this.showBoundaryAtoms&&(this.showBoundaryAtoms=t,this.structure&&this.rebuild(!1))}getShowBoundaryAtoms(){return this.showBoundaryAtoms}toggleCellDash(){this.showCellDash=!this.showCellDash;for(let t of this.cellGroup.children)t.material instanceof $n&&(t.visible=this.showCellDash);this.requestRender()}getShowCellDash(){return this.showCellDash}setAxisIndicatorSize(t){this.axisIndicator.setSize(t),this.requestRender()}getAxisIndicatorSize(){return this.axisIndicator.size}getAxisIndicatorRect(){let t=this.canvas;return this.axisIndicator.getRect(t.clientWidth,t.clientHeight)}setAxisIndicatorOffset(t,e){this.axisIndicator.setOffset(t,e),this.requestRender()}getAxisIndicatorOffset(){return this.axisIndicator.offset}resetAxisIndicatorOffset(){this.axisIndicator.resetOffset(),this.requestRender()}get axisInsetSize(){return this.axisIndicator.size}set axisInsetSize(t){this.axisIndicator.setSize(t)}setBondStyle(t){t!==this.bondStyle&&(this.bondStyle=t,this.structure&&this.buildVisuals())}updateBondCutoff(t,e,n){let s=this.bondParams.get(t);this.bondParams.set(t,{min:e,max:n,enabled:s?.enabled!==!1}),this.structure&&(this.cachedBonds=this.detectBonds(this.expandedSpecies,this.expandedPositions),this.buildVisuals())}getBondParams(){return this.bondParams}setBondPairEnabled(t,e){let n=this.bondParams.get(t);n&&(n.enabled=e,this.structure&&(this.cachedBonds=this.detectBonds(this.expandedSpecies,this.expandedPositions),this.buildVisuals()))}setElementColor(t,e){this.elementColorOverrides.set(t,e),this.materialCache.clear(),this.structure&&this.buildVisuals()}setElementRadius(t,e){this.elementRadiusOverrides.set(t,e),this.structure&&this.buildVisuals()}setElementVisibility(t,e){this.elementVisibility.set(t,e),this.structure&&this.buildVisuals()}getElementColor(t){return this.elementColorOverrides.get(t)||Uh(t,this.colorPalette)}getElementRadius(t){return this.elementRadiusOverrides.get(t)||Pn(t).displayRadius}getElementVisibility(t){return this.elementVisibility.get(t)!==!1}getElements(){return this.structure?[...new Set(this.structure.species)]:[]}getBondPairs(){let t=[];for(let[e,n]of this.bondParams)t.push({pair:e,min:n.min,max:n.max,enabled:n.enabled});return t}updateTheme(){let t=this.getBackgroundColor();this.scene.fog instanceof $i&&this.scene.fog.color.setHex(t),this.requestRender()}setColorPalette(t){t!==this.colorPalette&&(this.colorPalette=t,this.structure?this.rebuild(!1):this.volumetricData&&this.buildIsosurface(),this.requestRender())}getColorPalette(){return this.colorPalette}setAtomSelectCallback(t){this.onAtomSelect=t}setMeasurementCallback(t){this.onMeasurement=t}clearMeasurements(){for(let t of this.measurements)for(let e of t.objects)this.measureGroup.remove(e);this.measurements=[],this.requestRender()}clearSelection(){this.selectedAtoms=[],this.updateSelectionHighlight(),this.requestRender()}setInteractionMode(t){t!==this.interactionMode&&(this.interactionMode=t,this.selectedAtoms=[],this.clearMeasurements(),this.updateSelectionHighlight())}getInteractionMode(){return this.interactionMode}addLatticePlane(t,e){if(!this.structure)return;let n=this.structure.lattice,s=new A(...n[0]),r=new A(...n[1]),o=new A(...n[2]),a=s.dot(r.clone().cross(o)),l=r.clone().cross(o).multiplyScalar(2*Math.PI/a),c=o.clone().cross(s).multiplyScalar(2*Math.PI/a),h=s.clone().cross(r).multiplyScalar(2*Math.PI/a),d=l.clone().multiplyScalar(t[0]).add(c.clone().multiplyScalar(t[1])).add(h.clone().multiplyScalar(t[2])),u=2*Math.PI/d.length();d.normalize();let p=e??u,g=d.clone().multiplyScalar(p),x=Math.max(s.length(),r.length(),o.length())*Math.max(...this.supercell)*1.5,m=new Zi(x,x);this.geometries.push(m);let f=[4474111,16729156,4521796,16729343,16777028,4521983],y=this.planeGroup.children.length%f.length,v=this.trackMat(new ve({color:f[y],transparent:!0,opacity:.3,side:Le})),_=new se(m,v);_.position.copy(g),_.lookAt(g.clone().add(d)),this.planeGroup.add(_),this.requestRender()}clearLatticePlanes(){this.clearGroup(this.planeGroup),this.requestRender()}loadVolumetric(t){this.volumetricData={origin:t.origin,lattice:t.lattice,dims:t.dims,data:t.data,stride:t.stride,originalDims:t.originalDims};let e=0,n=0;for(let s=0;s<this.volumetricData.data.length;s++){let r=this.volumetricData.data[s];r>e&&(e=r),r<n&&(n=r)}this.isoLevel=e*.1,this.buildIsosurface()}setIsoLevel(t){this.isoLevel=t,this.buildIsosurface()}getIsoLevel(){return this.isoLevel}getIsoRange(){if(!this.volumetricData)return null;let t=0;for(let e=0;e<this.volumetricData.data.length;e++){let n=Math.abs(this.volumetricData.data[e]);n>t&&(t=n)}return{min:0,max:t}}buildIsosurface(){if(this.clearGroup(this.isoGroup),!this.volumetricData)return;if(this.isoLevel<=0){this.requestRender();return}let t=this.volumetricData,e=this.supercell,n=Oh(t.data,t.dims,e),s=[[t.lattice[0][0]*e[0],t.lattice[0][1]*e[0],t.lattice[0][2]*e[0]],[t.lattice[1][0]*e[1],t.lattice[1][1]*e[1],t.lattice[1][2]*e[1]],[t.lattice[2][0]*e[2],t.lattice[2][1]*e[2],t.lattice[2][2]*e[2]]],[r,o,a]=n.dims,l=[s[0][0]/r,s[0][1]/r,s[0][2]/r],c=[s[1][0]/o,s[1][1]/o,s[1][2]/o],h=[s[2][0]/a,s[2][1]/a,s[2][2]/a],d=(f,y)=>[f[1]*y[2]-f[2]*y[1],f[2]*y[0]-f[0]*y[2],f[0]*y[1]-f[1]*y[0]],u=f=>{let y=Math.hypot(f[0],f[1],f[2])||1;return[f[0]/y,f[1]/y,f[2]/y]},p=u(d(s[0],s[1])),g=u(d(s[1],s[2])),x=u(d(s[2],s[0])),m=(f,y,v)=>{let _=this.trackMat(new ve({color:y,transparent:!0,opacity:.6,side:Le})),C=Bh(n.data,n.dims,t.origin,s,f,!0);if(C.positions.length>0){let M=new qt;M.setAttribute("position",new ce(C.positions,3)),M.setAttribute("normal",new ce(C.normals,3)),this.geometries.push(M),this.isoGroup.add(new se(M,_))}let S=(M,b)=>{if(M===0){let P=new Float32Array(o*a);for(let L=0;L<o;L++)for(let D=0;D<a;D++)P[L*a+D]=n.data[b*o*a+L*a+D];return P}else if(M===1){let P=new Float32Array(r*a);for(let L=0;L<r;L++)for(let D=0;D<a;D++)P[L*a+D]=n.data[L*o*a+b*a+D];return P}else{let P=new Float32Array(r*o);for(let L=0;L<r;L++)for(let D=0;D<o;D++)P[L*o+D]=n.data[L*o*a+D*a+b];return P}},T=t.origin,I=[{data:S(0,0),dims:[o,a],origin:T,uStep:c,vStep:h,normal:[-g[0],-g[1],-g[2]]},{data:S(0,0),dims:[o,a],origin:[T[0]+s[0][0],T[1]+s[0][1],T[2]+s[0][2]],uStep:c,vStep:h,normal:g},{data:S(1,0),dims:[r,a],origin:T,uStep:l,vStep:h,normal:[-x[0],-x[1],-x[2]]},{data:S(1,0),dims:[r,a],origin:[T[0]+s[1][0],T[1]+s[1][1],T[2]+s[1][2]],uStep:l,vStep:h,normal:x},{data:S(2,0),dims:[r,o],origin:T,uStep:l,vStep:c,normal:[-p[0],-p[1],-p[2]]},{data:S(2,0),dims:[r,o],origin:[T[0]+s[2][0],T[1]+s[2][1],T[2]+s[2][2]],uStep:l,vStep:c,normal:p}];for(let M of I){let b=zh(M.data,M.dims,M.origin,M.uStep,M.vStep,f,M.normal,v);if(b.positions.length===0)continue;let P=new qt;P.setAttribute("position",new ce(b.positions,3)),P.setAttribute("normal",new ce(b.normals,3)),this.geometries.push(P),this.isoGroup.add(new se(P,_))}};m(this.isoLevel,this.paletteColors().isoPos,!1),m(-this.isoLevel,this.paletteColors().isoNeg,!0),this.requestRender()}getStructureInfo(){if(!this.structure)return null;let t=this.structure.lattice,e=new A(...t[0]),n=new A(...t[1]),s=new A(...t[2]),r=Math.abs(e.dot(n.clone().cross(s))),o=new Map;for(let l of this.structure.species)o.set(l,(o.get(l)||0)+1);let a=[...o.entries()].map(([l,c])=>c>1?`${l}${c}`:l).join("");return{spaceGroup:this.structure.spaceGroup||"P1",formula:a,volume:r,cellParams:this.structure.cellParams||null,atomCount:this.structure.species.length}}exportScreenshot(t=2){let e=this.canvas.clientWidth*t,n=this.canvas.clientHeight*t;this.renderer.setSize(e,n,!1),this.renderer.render(this.scene,this.activeCamera);let s=this.renderer.domElement.toDataURL("image/png");return this.renderer.setSize(this.canvas.clientWidth,this.canvas.clientHeight,!1),this.requestRender(),s}getState(){let t=this.activeCamera.position,e=this.controls.target,n={};for(let[s,r]of this.bondParams)n[s]={min:r.min,max:r.max,enabled:r.enabled};return{schemaVersion:1,displayStyle:this.displayStyle,cameraMode:this.cameraMode,showBonds:this.showBonds,showLabels:this.showLabels,showPolyhedra:this.showPolyhedra,showBoundaryAtoms:this.showBoundaryAtoms,showCellDash:this.showCellDash,supercell:this.supercell,cameraPosition:[t.x,t.y,t.z],controlsTarget:[e.x,e.y,e.z],orthoZoom:this.orthoCamera.zoom,colorPalette:this.colorPalette,axisIndicatorSize:this.axisInsetSize,isoLevel:this.isoLevel,forceBonds:this.forceBonds,elementColorOverrides:Object.fromEntries(this.elementColorOverrides),elementRadiusOverrides:Object.fromEntries(this.elementRadiusOverrides),elementVisibility:Object.fromEntries(this.elementVisibility),bondOverrides:n,impostorEnabled:this.impostorEnabled,polyhedraCenters:[...this.polyhedraCenters],showEllipsoids:this.showEllipsoids,probabilityContour:this.ellipsoidRenderer.getProbabilityContour(),showPartialOccupancy:this.showPartialOccupancy,showAtomVectors:this.showAtomVectors,vectorColormap:this.vectorArrowRenderer.getColormap(),vectorScale:this.vectorArrowRenderer.getScale()}}restoreState(t){if(t.schemaVersion===1){if(this.displayStyle=t.displayStyle,this.showBonds=t.showBonds,this.showLabels=t.showLabels,typeof t.showBoundaryAtoms=="boolean"&&(this.showBoundaryAtoms=t.showBoundaryAtoms),typeof t.showCellDash=="boolean"&&(this.showCellDash=t.showCellDash),this.supercell=t.supercell,t.colorPalette&&(this.colorPalette=t.colorPalette),typeof t.axisIndicatorSize=="number"&&(this.axisInsetSize=t.axisIndicatorSize),typeof t.isoLevel=="number"&&(this.isoLevel=t.isoLevel),typeof t.forceBonds=="boolean"&&(this.forceBonds=t.forceBonds),t.elementColorOverrides&&(this.elementColorOverrides=new Map(Object.entries(t.elementColorOverrides))),t.elementRadiusOverrides&&(this.elementRadiusOverrides=new Map(Object.entries(t.elementRadiusOverrides))),t.elementVisibility&&(this.elementVisibility=new Map(Object.entries(t.elementVisibility))),t.bondOverrides)for(let[e,n]of Object.entries(t.bondOverrides))this.bondParams.set(e,{min:n.min,max:n.max,enabled:n.enabled});if(typeof t.impostorEnabled=="boolean")this.impostorEnabled=t.impostorEnabled;else{let e=t.impostorMode;e==="off"?this.impostorEnabled=!1:(e==="on"||e==="auto")&&(this.impostorEnabled=!0)}Array.isArray(t.polyhedraCenters)&&t.polyhedraCenters.length>0&&(this.polyhedraCenters=new Set(t.polyhedraCenters),this.polyhedraCentersUserSet=!0),typeof t.showEllipsoids=="boolean"&&(this.showEllipsoids=t.showEllipsoids),(t.probabilityContour===.5||t.probabilityContour===.9)&&this.ellipsoidRenderer.setProbabilityContour(t.probabilityContour),typeof t.showPartialOccupancy=="boolean"&&(this.showPartialOccupancy=t.showPartialOccupancy),typeof t.showAtomVectors=="boolean"&&(this.showAtomVectors=t.showAtomVectors),(t.vectorColormap==="redblue"||t.vectorColormap==="viridis")&&this.vectorArrowRenderer.setColormap(t.vectorColormap),typeof t.vectorScale=="number"&&t.vectorScale>0&&this.vectorArrowRenderer.setScale(t.vectorScale),t.cameraMode!==this.cameraMode&&this.setCameraMode(t.cameraMode),this.activeCamera.position.set(...t.cameraPosition),this.controls.target.set(...t.controlsTarget),this.orthoCamera.zoom=t.orthoZoom,this.orthoCamera.updateProjectionMatrix(),this.controls.update(),this.requestRender()}}viewAlongAxis(t){if(!this.structure)return;let e=this.structure.lattice,n=new A(...e[0]),s=new A(...e[1]),r=new A(...e[2]),o,a;switch(t){case"a":o=n.clone().normalize(),a=r.clone().normalize();break;case"b":o=s.clone().normalize(),a=r.clone().normalize();break;case"c":o=r.clone().normalize(),a=s.clone().normalize();break;case"a*":o=s.clone().cross(r).normalize(),a=r.clone().normalize();break;case"b*":o=r.clone().cross(n).normalize(),a=r.clone().normalize();break;case"c*":o=n.clone().cross(s).normalize(),a=s.clone().normalize();break}this.animateCameraToDirection(o,a)}viewAlongDirection(t){if(!this.structure)return;let e=this.structure.lattice,n=new A(t[0]*e[0][0]+t[1]*e[1][0]+t[2]*e[2][0],t[0]*e[0][1]+t[1]*e[1][1]+t[2]*e[2][1],t[0]*e[0][2]+t[1]*e[1][2]+t[2]*e[2][2]).normalize();this.animateCameraToDirection(n)}viewNormalToPlane(t){if(!this.structure)return;let e=this.structure.lattice,n=new A(...e[0]),s=new A(...e[1]),r=new A(...e[2]),o=n.dot(s.clone().cross(r)),a=s.clone().cross(r).multiplyScalar(2*Math.PI/o),l=r.clone().cross(n).multiplyScalar(2*Math.PI/o),c=n.clone().cross(s).multiplyScalar(2*Math.PI/o),h=a.multiplyScalar(t[0]).add(l.multiplyScalar(t[1])).add(c.multiplyScalar(t[2])).normalize();this.animateCameraToDirection(h)}rotateCamera(t,e){let n=t*Math.PI/180,s=this.controls.target.clone(),r=this.activeCamera.position.clone().sub(s),o;e==="y"?o=this.activeCamera.up.clone().normalize():e==="x"?o=new A().setFromMatrixColumn(this.activeCamera.matrix,0):o=r.clone().normalize();let a=new xe().setFromAxisAngle(o,n);r.applyQuaternion(a),e==="z"&&this.activeCamera.up.applyQuaternion(a),this.activeCamera.position.copy(s).add(r),this.activeCamera.lookAt(s),this.controls.update(),this.requestRender()}zoom(t){this.activeCamera instanceof Re?this.activeCamera.position.lerp(this.controls.target,1-t):(this.orthoCamera.zoom*=1/t,this.orthoCamera.updateProjectionMatrix()),this.controls.update(),this.requestRender()}initFreeRotation(t){let e=!1,n="free",s=0,r=0,o=null,a=.4,l=20,c=()=>{let d=this.activeCamera.position.distanceTo(this.controls.target);return a*(l/Math.max(d,1))};t.addEventListener("pointerdown",d=>{d.button===0&&(e=!0,s=d.clientX,r=d.clientY,o=null,d.ctrlKey||d.metaKey?n="ctrl":d.shiftKey?n="shift":n="free",t.setPointerCapture(d.pointerId))}),t.addEventListener("pointermove",d=>{if(!e)return;let u=d.clientX-s,p=d.clientY-r;s=d.clientX,r=d.clientY;let g=c();if(n==="ctrl")this.rotateCamera(u*g,"z");else if(n==="shift"){if(!o&&(Math.abs(d.clientX-s+u)>5||Math.abs(d.clientY-r+p)>5)&&(o=Math.abs(u)>Math.abs(p)?"y":"x"),o){let x=o==="y"?u:p;this.rotateCamera(x*g,o)}}else this.rotateCameraFree(u*g,p*g)});let h=()=>{e=!1,o=null};t.addEventListener("pointerup",h),t.addEventListener("pointercancel",h)}rotateCameraFree(t,e){let n=this.controls.target.clone(),s=this.activeCamera.position.clone().sub(n),r=new A().setFromMatrixColumn(this.activeCamera.matrix,0).normalize(),o=new A().setFromMatrixColumn(this.activeCamera.matrix,1).normalize(),a=new xe().setFromAxisAngle(o,-t*Math.PI/180),l=new xe().setFromAxisAngle(r,-e*Math.PI/180),c=a.multiply(l);s.applyQuaternion(c),this.activeCamera.up.applyQuaternion(c),this.activeCamera.position.copy(n).add(s),this.activeCamera.lookAt(n),this.controls.update(),this.requestRender()}standardOrientation(){if(!this.structure)return;let t=this.structure.lattice,e=new A(...t[0]),n=new A(...t[1]),s=new A(...t[2]),r=s.clone().normalize(),o=n.clone().cross(s).normalize();this.perspCamera.up.copy(r),this.orthoCamera.up.copy(r),this.fitCamera();let a=this.controls.target.clone(),l=this.activeCamera.position.distanceTo(a),c=a.clone().add(o.multiplyScalar(l));this.perspCamera.position.copy(c),this.orthoCamera.position.copy(c),this.perspCamera.lookAt(a),this.orthoCamera.lookAt(a),this.controls.update(),this.requestRender()}initAxisIndicator(){}updateAxisIndicator(){if(!this.structure)return;let t=this.structure.lattice;this.axisIndicator.update(t[0],t[1],t[2])}requestRender(){this.renderRequested||(this.renderRequested=!0,requestAnimationFrame(()=>this.renderFrame()))}renderFrame(){if(this.renderRequested=!1,this.controls.update(),this.currentImpostorMaterial||this.bondImpostorMaterial){let e=new A(5,10,7).normalize().clone().transformDirection(this.activeCamera.matrixWorldInverse),s=new A(-5,-5,-5).normalize().clone().transformDirection(this.activeCamera.matrixWorldInverse);this.currentImpostorMaterial&&(this.currentImpostorMaterial.uniforms.uLightDir.value.copy(e),this.currentImpostorMaterial.uniforms.uLightDirFill.value.copy(s)),this.bondImpostorMaterial&&(this.bondImpostorMaterial.uniforms.uLightDir.value.copy(e),this.bondImpostorMaterial.uniforms.uLightDirFill.value.copy(s))}this.renderer.setViewport(0,0,this.canvas.clientWidth,this.canvas.clientHeight),this.renderer.setScissorTest(!1),this.renderer.render(this.scene,this.activeCamera),this.axisIndicator.syncToMainCamera(this.activeCamera,this.controls.target),this.axisIndicator.render(this.renderer)}getMaterial(t,e){let n=`${t}_${e}`,s=this.materialCache.get(n);return s||(s=new ve({color:new yt(t),shininess:e}),this.materialCache.set(n,s)),s}getWireframeMaterial(t){let e=`${t}_wf`,n=this.materialCache.get(e);return n||(n=new ve({color:new yt(t),wireframe:!0}),this.materialCache.set(e,n)),n}disposeAllMaterials(){for(let t of this.materialCache.values())t.dispose();this.materialCache.clear();for(let t of this.materials)t.dispose();this.materials=[]}trackMat(t){return this.materials.push(t),t}getSphereSegments(t){return t<500?[32,24]:t<2e3?[16,12]:[8,6]}getCylinderSegments(t){return t<500?12:t<2e3?8:6}getBackgroundColor(){try{let e=getComputedStyle(document.body).backgroundColor.match(/\d+/g);if(e&&e.length>=3)return parseInt(e[0])<<16|parseInt(e[1])<<8|parseInt(e[2])}catch{}return 1973790}paletteColors(){return Fh(this.colorPalette)}animateCameraToDirection(t,e){if(this.animating)return;this.animating=!0;let n=this.controls.target.clone(),s=this.activeCamera.position.distanceTo(n),r=n.clone().add(t.clone().multiplyScalar(s)),o=this.activeCamera.position.clone(),a=this.activeCamera.up.clone(),l=e?e.clone():a.clone(),c=performance.now(),h=300,d=()=>{let u=Math.min((performance.now()-c)/h,1),p=u*(2-u);this.activeCamera.position.lerpVectors(o,r,p),this.activeCamera.up.lerpVectors(a,l,p).normalize(),this.activeCamera.lookAt(n),this.controls.update(),this.renderFrame(),u<1?requestAnimationFrame(d):this.animating=!1};requestAnimationFrame(d)}onCanvasClick(t){if(!this.structure||this.expandedPositions.length===0)return;let e=-1;if(this.expandedPositions.length>=zx)e=this.pickingRenderer.pickAt(t.clientX,t.clientY,this.canvas,this.activeCamera,this.renderer);else{let n=this.canvas.getBoundingClientRect(),s=new At((t.clientX-n.left)/n.width*2-1,-((t.clientY-n.top)/n.height)*2+1);this.raycaster.setFromCamera(s,this.activeCamera);let r=1/0;for(let o of this.atomMeshMap){let a=this.raycaster.intersectObject(o.mesh);if(a.length>0&&a[0].instanceId!==void 0){let l=a[0].distance;l<r&&(r=l,e=o.globalIndices[a[0].instanceId])}}}if(e>=0){if(this.onAtomSelect){let n=this.expandedUnitCellIndex[e]??e,s=this.structure.positions[n],r=this.cartesianToFractional(s);this.onAtomSelect({index:n,element:this.expandedSpecies[e],cartesian:this.expandedPositions[e],fractional:r})}this.interactionMode==="navigate"?this.selectedAtoms=[e]:(this.selectedAtoms.push(e),this.selectedAtoms.length===2?this.addDistanceMeasurement(this.selectedAtoms[0],this.selectedAtoms[1]):this.selectedAtoms.length===3?this.addAngleMeasurement(this.selectedAtoms[0],this.selectedAtoms[1],this.selectedAtoms[2]):this.selectedAtoms.length>=4&&(this.addDihedralMeasurement(this.selectedAtoms[0],this.selectedAtoms[1],this.selectedAtoms[2],this.selectedAtoms[3]),this.selectedAtoms=[])),this.updateSelectionHighlight(),this.requestRender()}else this.selectedAtoms=[],this.updateSelectionHighlight(),this.onAtomSelect&&this.onAtomSelect(null),this.requestRender()}updateSelectionHighlight(){let t=new Set(this.selectedAtoms);for(let e of this.atomMeshMap){for(let n=0;n<e.globalIndices.length;n++){let s=t.has(e.globalIndices[n]);e.mesh.setColorAt(n,s?oo.HIGHLIGHT_COLOR:e.baseColor)}e.mesh.instanceColor&&(e.mesh.instanceColor.needsUpdate=!0)}}cartesianToFractional(t){if(!this.structure)return[0,0,0];let e=this.structure.lattice,n=e[0],s=e[1],r=e[2],o=n[0]*(s[1]*r[2]-s[2]*r[1])-n[1]*(s[0]*r[2]-s[2]*r[0])+n[2]*(s[0]*r[1]-s[1]*r[0]);if(Math.abs(o)<1e-10)return[0,0,0];let a=1/o,l=[[(s[1]*r[2]-s[2]*r[1])*a,(n[2]*r[1]-n[1]*r[2])*a,(n[1]*s[2]-n[2]*s[1])*a],[(s[2]*r[0]-s[0]*r[2])*a,(n[0]*r[2]-n[2]*r[0])*a,(n[2]*s[0]-n[0]*s[2])*a],[(s[0]*r[1]-s[1]*r[0])*a,(n[1]*r[0]-n[0]*r[1])*a,(n[0]*s[1]-n[1]*s[0])*a]];return[l[0][0]*t[0]+l[1][0]*t[1]+l[2][0]*t[2],l[0][1]*t[0]+l[1][1]*t[1]+l[2][1]*t[2],l[0][2]*t[0]+l[1][2]*t[1]+l[2][2]*t[2]]}addDistanceMeasurement(t,e){let n=new A(...this.expandedPositions[t]),s=new A(...this.expandedPositions[e]),r=n.distanceTo(s),o=[],a=new qt().setFromPoints([n,s]);this.geometries.push(a);let l=this.trackMat(new $n({color:16776960,dashSize:.2,gapSize:.1})),c=new hi(a,l);c.computeLineDistances(),this.measureGroup.add(c),o.push(c);let h=n.clone().lerp(s,.5),d=this.createMeasurementLabel(`${r.toFixed(3)} A`);d.position.copy(h).add(new A(0,.3,0)),this.measureGroup.add(d),o.push(d);let u={type:"distance",atoms:[t,e],value:r,objects:o};this.measurements.push(u),this.onMeasurement&&this.onMeasurement({type:"distance",value:r,atoms:[t,e]})}addAngleMeasurement(t,e,n){let s=new A(...this.expandedPositions[t]),r=new A(...this.expandedPositions[e]),o=new A(...this.expandedPositions[n]),a=s.clone().sub(r).normalize(),l=o.clone().sub(r).normalize(),c=Math.acos(Math.max(-1,Math.min(1,a.dot(l))))*180/Math.PI,h=[],d=this.trackMat(new $n({color:16776960,dashSize:.2,gapSize:.1}));for(let[g,x]of[[s,r],[r,o]]){let m=new qt().setFromPoints([g,x]);this.geometries.push(m);let f=new hi(m,d);f.computeLineDistances(),this.measureGroup.add(f),h.push(f)}let u=this.createMeasurementLabel(`${c.toFixed(1)}\xB0`);u.position.copy(r).add(new A(0,.4,0)),this.measureGroup.add(u),h.push(u);let p={type:"angle",atoms:[t,e,n],value:c,objects:h};this.measurements.push(p),this.onMeasurement&&this.onMeasurement({type:"angle",value:c,atoms:[t,e,n]})}addDihedralMeasurement(t,e,n,s){let r=new A(...this.expandedPositions[t]),o=new A(...this.expandedPositions[e]),a=new A(...this.expandedPositions[n]),l=new A(...this.expandedPositions[s]),c=o.clone().sub(r),h=a.clone().sub(o),d=l.clone().sub(a),u=c.clone().cross(h).normalize(),p=h.clone().cross(d).normalize(),g=u.clone().cross(h.clone().normalize()),x=Math.atan2(g.dot(p),u.dot(p))*180/Math.PI,m=[],f=[[[r,o,a,r],54527],[[o,a,l,o],16727752]];for(let[C,S]of f){let T=new qt().setFromPoints(C);this.geometries.push(T);let I=this.trackMat(new $n({color:S,dashSize:.2,gapSize:.1})),M=new hi(T,I);M.computeLineDistances(),this.measureGroup.add(M),m.push(M)}let y=o.clone().lerp(a,.5),v=this.createMeasurementLabel(`${x.toFixed(1)}\xB0`);v.position.copy(y).add(new A(0,.4,0)),this.measureGroup.add(v),m.push(v);let _={type:"dihedral",atoms:[t,e,n,s],value:x,objects:m};this.measurements.push(_),this.onMeasurement&&this.onMeasurement({type:"dihedral",value:x,atoms:[t,e,n,s]})}createMeasurementLabel(t){let r=document.createElement("canvas");r.width=1024,r.height=256;let o=r.getContext("2d");o.fillStyle="rgba(0,0,0,0.7)",o.roundRect(0,0,1024,256,8*4),o.fill(),o.fillStyle="#ffff00",o.font=`bold ${32*4}px sans-serif`,o.textAlign="center",o.textBaseline="middle",o.fillText(t,1024/2,256/2);let a=new ui(r);a.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),a.minFilter=hn,a.magFilter=He,this.textures.push(a);let l=this.trackMat(new Yn({map:a,depthTest:!1})),c=new ci(l);return c.scale.set(1.5,.4,1),c}rebuild(t=!0,e=!1){let n=this.structure;this.disposeResources();let{species:s,positions:r}=this.expandSupercell(n);this.expandedSpecies=s,this.expandedPositions=r,this.autoPopulateBondParams(s),e||(this.cachedBonds=this.detectBonds(s,r)),this.polyhedraCentersUserSet||this.autoDetectPolyhedraCenters(),this.buildUnitCell(n.lattice),this.buildVisuals(),t&&this.fitCamera(),this.requestRender()}autoPopulateBondParams(t){let n=[...new Set(t)].sort();for(let s=0;s<n.length;s++)for(let r=s;r<n.length;r++){let o=`${n[s]}-${n[r]}`;if(!this.bondParams.has(o)){let a=Pn(n[s]).covalentRadius+Pn(n[r]).covalentRadius+.3;this.bondParams.set(o,{min:.1,max:a,enabled:!0})}}}buildVisuals(){this.clearGroup(this.atomGroup),this.clearGroup(this.labelGroup),this.clearGroup(this.polyhedraGroup),this.atomMeshMap=[];let t=this.expandedSpecies,e=this.expandedPositions,n=this.cachedBonds,s=this.displayStyle;this.buildAtoms(t,e,s,n),this.pickingRenderer.rebuild(this.atomMeshMap,this.impostorEnabled,this.cameraMode==="orthographic"),this.vectorArrowRenderer.clear();let r=this.structure?.atomVectors?.values;if(this.showAtomVectors&&r&&s!=="wireframe"){let o=[];for(let a=0;a<t.length;a++){if(this.elementVisibility.get(t[a])===!1)continue;let l=this.expandedUnitCellIndex[a]??a,c=r[l];!c||Math.sqrt(c[0]*c[0]+c[1]*c[1]+c[2]*c[2])<1e-4||o.push({position:e[a],vector:c})}o.length>0&&this.vectorArrowRenderer.rebuild(o)}this.vectorArrowRenderer.setVisible(this.showAtomVectors),s!=="space-filling"&&this.showBonds?this.bondRenderer.rebuild(t,e,n,this.bondStyle,s):this.bondRenderer.rebuild(t,e,[],this.bondStyle,s),this.bondRenderer.setVisible(this.showBonds&&s!=="space-filling"),this.showLabels&&this.buildLabels(),this.labelGroup.visible=this.showLabels,this.showPolyhedra&&this.buildPolyhedra(),this.polyhedraGroup.visible=this.showPolyhedra,this.volumetricData&&this.buildIsosurface(),this.requestRender()}expandSupercell(t){let[e,n,s]=this.supercell,r=[],o=[],a=[],l=t.lattice,c=t.positions;this.showBoundaryAtoms&&(c=t.positions.map(h=>{let d=this.cartesianToFractional(h),u=[(d[0]%1+1)%1,(d[1]%1+1)%1,(d[2]%1+1)%1];return[u[0]*l[0][0]+u[1]*l[1][0]+u[2]*l[2][0],u[0]*l[0][1]+u[1]*l[1][1]+u[2]*l[2][1],u[0]*l[0][2]+u[1]*l[1][2]+u[2]*l[2][2]]}));for(let h=0;h<e;h++)for(let d=0;d<n;d++)for(let u=0;u<s;u++){let p=[h*l[0][0]+d*l[1][0]+u*l[2][0],h*l[0][1]+d*l[1][1]+u*l[2][1],h*l[0][2]+d*l[1][2]+u*l[2][2]];for(let g=0;g<t.species.length;g++)r.push(t.species[g]),o.push([c[g][0]+p[0],c[g][1]+p[1],c[g][2]+p[2]]),a.push(g)}return this.showBoundaryAtoms&&this.addBoundaryAtoms(t,r,o,a),this.expandedUnitCellIndex=a,{species:r,positions:o}}addBoundaryAtoms(t,e,n,s){let o=t.lattice,[a,l,c]=this.supercell,h=new Set;for(let d=0;d<n.length;d++){let u=`${n[d][0].toFixed(3)}_${n[d][1].toFixed(3)}_${n[d][2].toFixed(3)}`;h.add(u)}for(let d=0;d<t.species.length;d++){let u=this.cartesianToFractional(t.positions[d]),[p,g,x]=u;p=(p%1+1)%1,p>1-1e-6&&(p=0),g=(g%1+1)%1,g>1-1e-6&&(g=0),x=(x%1+1)%1,x>1-1e-6&&(x=0);let m=p<.02,f=g<.02,y=x<.02;if(!m&&!f&&!y)continue;let v=m?[0,1]:[0],_=f?[0,1]:[0],C=y?[0,1]:[0];for(let S=0;S<a;S++)for(let T=0;T<l;T++)for(let I=0;I<c;I++)for(let M of v)for(let b of _)for(let P of C){if(M===0&&b===0&&P===0)continue;let L=S+M+p,D=T+b+g,B=I+P+x;if(L>a+.02||D>l+.02||B>c+.02)continue;let W=[L*o[0][0]+D*o[1][0]+B*o[2][0],L*o[0][1]+D*o[1][1]+B*o[2][1],L*o[0][2]+D*o[1][2]+B*o[2][2]],H=`${W[0].toFixed(3)}_${W[1].toFixed(3)}_${W[2].toFixed(3)}`;h.has(H)||(h.add(H),e.push(t.species[d]),n.push(W),s.push(d))}}}getBondSkipInfo(){let t=this.expandedPositions?.length??0,e=5e3,n=Math.min(1e4,Math.round(t*.03));return{skipped:t>e&&!this.forceBonds,atomCount:t,limit:e,estimateMs:n}}setForceBonds(t){this.forceBonds=t,this.structure&&(this.cachedBonds=this.detectBonds(this.expandedSpecies,this.expandedPositions),this.buildVisuals())}detectBonds(t,e){let n=e.length;if(n>5e3&&!this.forceBonds)return[];let s=0;for(let[,c]of this.bondParams)c.max>s&&(s=c.max);if(s===0)return[];let r=s,o=new Map,a=new Array(n);for(let c=0;c<n;c++){let h=Math.floor(e[c][0]/r),d=Math.floor(e[c][1]/r),u=Math.floor(e[c][2]/r);a[c]=[h,d,u];let p=`${h},${d},${u}`,g=o.get(p);g||(g=[],o.set(p,g)),g.push(c)}let l=[];for(let c=0;c<n;c++){let[h,d,u]=a[c];for(let p=-1;p<=1;p++)for(let g=-1;g<=1;g++)for(let x=-1;x<=1;x++){let m=o.get(`${h+p},${d+g},${u+x}`);if(m)for(let f of m){if(f<=c)continue;let y=[t[c],t[f]].sort().join("-"),v=this.bondParams.get(y);if(!v||!v.enabled)continue;let _=e[f][0]-e[c][0],C=e[f][1]-e[c][1],S=e[f][2]-e[c][2],T=Math.sqrt(_*_+C*C+S*S);T>=v.min&&T<=v.max&&l.push({i:c,j:f,distance:T})}}}return l}buildAtoms(t,e,n,s){this.ellipsoidRenderer.clear();let r=new Set,o=new Map,a=this.structure?.thermalAniso;if(this.showEllipsoids&&a&&!n.startsWith("wire")&&n!=="stick"){for(let L=0;L<t.length;L++){let D=this.expandedUnitCellIndex[L]??L,B=a[D];if(!B||this.elementVisibility.get(t[L])===!1)continue;r.add(L);let W=o.get(t[L])??[];W.length===0&&o.set(t[L],W),W.push({position:e[L],uij:B})}o.size>0&&this.ellipsoidRenderer.rebuild(o,L=>this.getElementColor(L))}let l=new Set,c=this.structure?.occupancy;if(this.showPartialOccupancy&&c&&!n.startsWith("wire"))for(let L=0;L<t.length;L++){if(r.has(L))continue;let D=this.expandedUnitCellIndex[L]??L,B=c[D];B===void 0||B>=1-1e-6||this.elementVisibility.get(t[L])!==!1&&l.add(L)}let h=new Map;for(let L=0;L<t.length;L++){if(r.has(L)||l.has(L))continue;let D=t[L];h.has(D)||h.set(D,[]),h.get(D).push(L)}let d=n==="wireframe",u=!d&&this.impostorEnabled,p=null,g=null;if(u)g=Vh(),g.uniforms.uOrtho.value=this.cameraMode==="orthographic",this.trackMat(g),this.currentImpostorMaterial=g;else{let[L,D]=this.getSphereSegments(t.length);p=new Ze(1,L,D),this.geometries.push(p),this.currentImpostorMaterial=null}let m=t.length>=5e3,f=t.length>=2e4?3:2,y=1/0,v=-1/0,_=1/0,C=-1/0,S=1/0,T=-1/0;if(m)for(let L of e)L[0]<y&&(y=L[0]),L[0]>v&&(v=L[0]),L[1]<_&&(_=L[1]),L[1]>C&&(C=L[1]),L[2]<S&&(S=L[2]),L[2]>T&&(T=L[2]);let I=Math.max(v-y,1e-6),M=Math.max(C-_,1e-6),b=Math.max(T-S,1e-6),P=(L,D)=>{let B=Pn(D),W=this.getElementColor(D),H=this.elementRadiusOverrides.get(D),Z;if(u)Z=new is(L.length,g);else{let nt=d?this.getWireframeMaterial(W):this.getMaterial(W,80);Z=new me(p,nt,L.length)}let V=new ue;for(let nt=0;nt<L.length;nt++){let rt=L[nt],pt=e[rt];V.position.set(pt[0],pt[1],pt[2]);let Dt;switch(n){case"space-filling":Dt=H!=null?H*3:B.vdwRadius;break;case"stick":Dt=H??.15;break;default:Dt=H??B.displayRadius;break}V.scale.set(Dt,Dt,Dt),V.updateMatrix(),Z.setMatrixAt(nt,V.matrix)}let et=new yt(W);for(let nt=0;nt<L.length;nt++)Z.setColorAt(nt,et);Z.instanceColor&&(Z.instanceColor.needsUpdate=!0),Z.instanceMatrix.needsUpdate=!0,m&&!u&&Z.computeBoundingSphere(),this.atomGroup.add(Z),this.atomMeshMap.push({mesh:Z,globalIndices:L,baseColor:et})};for(let[L,D]of h){if(this.elementVisibility.get(L)===!1)continue;if(!m){P(D,L);continue}let B=new Map;for(let W of D){let H=e[W],Z=Math.min(f-1,Math.max(0,Math.floor((H[0]-y)/I*f))),V=Math.min(f-1,Math.max(0,Math.floor((H[1]-_)/M*f))),et=Math.min(f-1,Math.max(0,Math.floor((H[2]-S)/b*f))),nt=`${Z},${V},${et}`,rt=B.get(nt);rt||(rt=[],B.set(nt,rt)),rt.push(W)}for(let[,W]of B)P(W,L)}if(l.size>0&&c){let L=new Ze(1,24,16);this.geometries.push(L);let D=new Map,B=new ue;for(let W of l){let H=t[W],Z=Pn(H),V=this.getElementColor(H),et=this.elementRadiusOverrides.get(H),nt=this.expandedUnitCellIndex[W]??W,rt=c[nt],pt;switch(n){case"space-filling":pt=et!=null?et*3:Z.vdwRadius;break;case"stick":pt=et??.15;break;default:pt=et??Z.displayRadius;break}let Dt=`${V}_${rt.toFixed(3)}`,q=D.get(Dt);q||(q=new ve({color:new yt(V),shininess:80,transparent:!0,opacity:rt,depthWrite:!1}),this.materials.push(q),D.set(Dt,q));let tt=new se(L,q);B.position.set(e[W][0],e[W][1],e[W][2]),B.scale.set(pt,pt,pt),B.updateMatrix(),tt.matrixAutoUpdate=!1,tt.matrix.copy(B.matrix),tt.renderOrder=1,this.atomGroup.add(tt)}}}getPolyhedraCenters(){return[...this.polyhedraCenters]}setPolyhedraCenters(t){this.polyhedraCenters=new Set(t),this.polyhedraCentersUserSet=!0,this.showPolyhedra&&(this.buildPolyhedra(),this.requestRender())}autoDetectPolyhedraCenters(){if(this.polyhedraCenters.clear(),this.cachedBonds.length===0)return;let t=new Map;for(let s of this.cachedBonds)t.has(s.i)||t.set(s.i,[]),t.has(s.j)||t.set(s.j,[]),t.get(s.i).push({idx:s.j,dist:s.distance}),t.get(s.j).push({idx:s.i,dist:s.distance});let e=new Map;for(let s of t.keys()){let r=this.expandedSpecies[s];e.has(r)||e.set(r,[]),e.get(r).push(s)}let n=1.2;for(let[s,r]of e){let o=0,a=new Map,l=0;for(let d of r){let u=t.get(d);if(u.length===0)continue;let p=1/0;for(let m of u)this.expandedSpecies[m.idx]!==s&&m.dist<p&&(p=m.dist);if(!isFinite(p))continue;let g=p*n,x=0;for(let m of u){if(m.dist>g)continue;let f=this.expandedSpecies[m.idx];a.set(f,(a.get(f)??0)+1),l++,x++}x>o&&(o=x)}if(o<4||o>8||l===0)continue;let c="",h=0;for(let[d,u]of a)u>h&&(h=u,c=d);c!==s&&h/l>=.85&&this.polyhedraCenters.add(s)}}buildPolyhedra(){if(this.clearGroup(this.polyhedraGroup),this.cachedBonds.length===0||this.polyhedraCenters.size===0)return;let t=new Map;for(let n of this.cachedBonds)t.has(n.i)||t.set(n.i,[]),t.has(n.j)||t.set(n.j,[]),t.get(n.i).push({idx:n.j,dist:n.distance}),t.get(n.j).push({idx:n.i,dist:n.distance});let e=1.2;for(let[n,s]of t){let r=this.expandedSpecies[n];if(!this.polyhedraCenters.has(r)||s.length===0)continue;let o=1/0;for(let h of s)this.expandedSpecies[h.idx]!==r&&h.dist<o&&(o=h.dist);if(!isFinite(o))continue;let a=o*e,l=s.filter(h=>h.dist<=a&&this.expandedSpecies[h.idx]!==r);if(l.length<4)continue;let c=l.map(h=>new A(...this.expandedPositions[h.idx]));this.addPolyhedron(c,r)}}addPolyhedron(t,e){if(t.length<4)return;let n;try{n=new es(t)}catch{return}let s=n.getAttribute("position");if(!s||s.count<3){n.dispose();return}this.geometries.push(n);let r=new yt(this.getElementColor(e)),o=this.trackMat(new ve({color:r,transparent:!0,opacity:.4,side:Le,shininess:30}));this.polyhedraGroup.add(new se(n,o));let a=new As(n);this.geometries.push(a);let l=this.trackMat(new fn({color:r.clone().multiplyScalar(.6)}));this.polyhedraGroup.add(new Cn(a,l))}buildLabels(){this.clearGroup(this.labelGroup);for(let t=0;t<this.expandedSpecies.length;t++){let e=this.getLabelTexture(this.expandedSpecies[t]),n=this.trackMat(new Yn({map:e,depthTest:!1,depthWrite:!1})),s=new ci(n),r=this.expandedPositions[t];s.position.set(r[0],r[1]+.5,r[2]),s.scale.set(.8,.4,1),this.labelGroup.add(s)}}getLabelTexture(t){let e=this.labelTextureCache.get(t);if(e)return e;let n=4,s=128*n,r=64*n,o=document.createElement("canvas");o.width=s,o.height=r;let a=o.getContext("2d");return a.fillStyle="rgba(0,0,0,0.6)",a.roundRect(0,0,s,r,8*n),a.fill(),a.fillStyle="#ffffff",a.font=`bold ${36*n}px sans-serif`,a.textAlign="center",a.textBaseline="middle",a.fillText(t,s/2,r/2),e=new ui(o),e.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),e.minFilter=hn,e.magFilter=He,this.labelTextureCache.set(t,e),this.textures.push(e),e}buildUnitCell(t){let[e,n,s]=t,[r,o,a]=this.supercell,l=(f,y,v)=>[f*e[0]+y*n[0]+v*s[0],f*e[1]+y*n[1]+v*s[1],f*e[2]+y*n[2]+v*s[2]],c=l(r,0,0),h=l(0,o,0),d=l(0,0,a),p=[[0,0,0],c,h,d,l(r,o,0),l(r,0,a),l(0,o,a),l(r,o,a)],g=[[0,1],[0,2],[0,3],[1,4],[1,5],[2,4],[2,6],[3,5],[3,6],[4,7],[5,7],[6,7]],x=[];for(let[f,y]of g)x.push(p[f][0],p[f][1],p[f][2]),x.push(p[y][0],p[y][1],p[y][2]);let m=new qt;m.setAttribute("position",new oe(x,3)),this.geometries.push(m),this.cellGroup.add(new Cn(m,this.trackMat(new fn({color:this.paletteColors().line}))));{let f=[];if(r===1&&o===1&&a===1)for(let[y,v]of g)f.push(new A(p[y][0],p[y][1],p[y][2]),new A(p[v][0],p[v][1],p[v][2]));for(let y=1;y<r;y++){let v=l(y,0,0),_=l(y,0,a),C=l(y,o,0),S=l(y,o,a);f.push(new A(...v),new A(...C)),f.push(new A(...v),new A(..._)),f.push(new A(...C),new A(...S)),f.push(new A(..._),new A(...S))}for(let y=1;y<o;y++){let v=l(0,y,0),_=l(0,y,a),C=l(r,y,0),S=l(r,y,a);f.push(new A(...v),new A(...C)),f.push(new A(...v),new A(..._)),f.push(new A(...C),new A(...S)),f.push(new A(..._),new A(...S))}for(let y=1;y<a;y++){let v=l(0,0,y),_=l(0,o,y),C=l(r,0,y),S=l(r,o,y);f.push(new A(...v),new A(...C)),f.push(new A(...v),new A(..._)),f.push(new A(...C),new A(...S)),f.push(new A(..._),new A(...S))}if(f.length>0){let y=new qt().setFromPoints(f);this.geometries.push(y);let v=this.trackMat(new $n({color:this.paletteColors().dash,dashSize:.3,gapSize:.15,depthTest:!1})),_=new Cn(y,v);_.computeLineDistances(),_.renderOrder=998,this.cellGroup.add(_)}}}fitCamera(){let t=new rn;if(t.setFromObject(this.atomGroup),t.isEmpty()&&t.setFromObject(this.cellGroup),t.isEmpty())return;let e=new A;t.getCenter(e);let n=t.getSize(new A),s=Math.max(n.x,n.y,n.z),r=s/(2*Math.tan(this.perspCamera.fov*Math.PI/360))*2,o=new A(0,0,1),a=new A(0,1,0);if(this.structure){let u=this.structure.lattice,p=new A(...u[0]),g=new A(...u[1]),x=new A(...u[2]);a=x.clone().normalize(),o=g.clone().cross(x).normalize()}this.perspCamera.up.copy(a),this.orthoCamera.up.copy(a);let l=e.clone().add(o.multiplyScalar(r));this.perspCamera.position.copy(l),this.perspCamera.lookAt(e);let c=this.canvas.clientWidth/this.canvas.clientHeight,h=s*2;this.orthoCamera.left=-h*c/2,this.orthoCamera.right=h*c/2,this.orthoCamera.top=h/2,this.orthoCamera.bottom=-h/2,this.orthoCamera.zoom=1,this.orthoCamera.updateProjectionMatrix(),this.orthoCamera.position.copy(l),this.orthoCamera.lookAt(e);let d=Math.max(500,r*4);this.perspCamera.far=d,this.perspCamera.updateProjectionMatrix(),this.orthoCamera.far=d,this.orthoCamera.updateProjectionMatrix(),this.scene.fog instanceof $i&&(this.scene.fog.density=Math.min(.015,3/d)),this.controls.target.copy(e),this.controls.update()}disposeResources(){this.clearGroup(this.atomGroup),this.bondRenderer.dispose(),this.clearGroup(this.cellGroup),this.clearGroup(this.labelGroup),this.clearGroup(this.polyhedraGroup),this.clearGroup(this.measureGroup),this.clearGroup(this.planeGroup),this.clearGroup(this.isoGroup),this.atomMeshMap=[],this.measurements=[];for(let t of this.geometries)t.dispose();this.geometries=[];for(let t of this.textures)t.dispose();this.textures=[],this.disposeAllMaterials(),this.labelTextureCache.clear()}clearGroup(t){for(;t.children.length>0;)t.remove(t.children[0])}setViewportShift(t){t!==this.viewportShiftPx&&(this.viewportShiftPx=t,this.applyViewportShift(),this.requestRender())}applyViewportShift(){let t=this.canvas.clientWidth||0,e=this.canvas.clientHeight||0;if(!t||!e)return;let n=this.viewportShiftPx;n===0?(this.perspCamera.clearViewOffset(),this.orthoCamera.clearViewOffset()):(this.perspCamera.setViewOffset(t,e,-n,0,t,e),this.orthoCamera.setViewOffset(t,e,-n,0,t,e))}onResize(){let t=this.canvas.clientWidth||this.canvas.parentElement?.clientWidth||0,e=this.canvas.clientHeight||this.canvas.parentElement?.clientHeight||0;if(!t||!e)return;let n=t/e;this.perspCamera.aspect=n,this.perspCamera.updateProjectionMatrix();let s=this.orthoCamera.top-this.orthoCamera.bottom;this.orthoCamera.left=-s*n/2,this.orthoCamera.right=s*n/2,this.orthoCamera.updateProjectionMatrix(),this.renderer.setSize(t,e,!1),this.viewportShiftPx!==0&&this.applyViewportShift(),this.requestRender()}};oo.HIGHLIGHT_COLOR=new yt(65535);var ro=oo;function ao(i,t,e,n){let s=1;for(;Math.ceil(i/s)*Math.ceil(t/s)*Math.ceil(e/s)>n;)s++;return s}function Pl(i,t){let e=t?.maxGridPoints;if(e==null)return i;let[n,s,r]=i.dims,o=ao(n,s,r,e);if(o<=1)return i;let a=Math.ceil(n/o),l=Math.ceil(s/o),c=Math.ceil(r/o),h=new Float32Array(a*l*c);for(let d=0;d<a;d++)for(let u=0;u<l;u++)for(let p=0;p<c;p++){let g=d*o,x=u*o,m=p*o;h[d*l*c+u*c+p]=i.data[g*s*r+x*r+m]}return{origin:i.origin,lattice:i.lattice,dims:[a,l,c],data:h,stride:(i.stride??1)*o,originalDims:i.originalDims??[n,s,r]}}function Kh(){return!1}function Jh(){return null}function Ll(i){let t=i.split(`
`),e=0,n=0,s=0,r=90,o=90,a=90,l="",c="",h=[],d=[],u=null,p=!1,g=!1;function x(){u&&u.columns.length>0&&u.rows.length>0&&d.push(u),u=null,p=!1,g=!1}for(let Q=0;Q<t.length;Q++){let j=t[Q].trim();if(j.startsWith("data_")){l=j.slice(5);continue}if(j.startsWith("_cell_length_a")){e=ss(j);continue}if(j.startsWith("_cell_length_b")){n=ss(j);continue}if(j.startsWith("_cell_length_c")){s=ss(j);continue}if(j.startsWith("_cell_angle_alpha")){r=ss(j);continue}if(j.startsWith("_cell_angle_beta")){o=ss(j);continue}if(j.startsWith("_cell_angle_gamma")){a=ss(j);continue}if(j.startsWith("_symmetry_space_group_name_H-M")||j.startsWith("_space_group_name_H-M")){c=j.split(/\s+/).slice(1).join(" ").replace(/['"]/g,"").replace(/\s+/g,"");continue}if(j.startsWith("_symmetry_equiv_pos_as_xyz")&&u===null){let at=j.split(/\s+/);at.length>1&&h.push(at.slice(1).join(" ").replace(/['"]/g,""));continue}if(j==="loop_"){x(),u={columns:[],rows:[]},p=!0;continue}if(u&&p&&j.startsWith("_")){let at=j.split(/\s+/)[0];(at==="_symmetry_equiv_pos_as_xyz"||at==="_space_group_symop_operation_xyz")&&(g=!0),u.columns.push(at);continue}if(u&&j.length>0&&!j.startsWith("#")){if(p=!1,g){let zt=j.replace(/['"]/g,"").trim();zt=zt.replace(/^\d+\s+/,""),zt.includes(",")&&h.push(zt.replace(/\s/g,""));continue}let at=Gx(j);at.length>=u.columns.length?u.rows.push(at):x();continue}u&&(j===""||j.startsWith("#"))&&(p||x())}x();let m=Wx(e,n,s,r,o,a),f=d.find(Q=>Q.columns.includes("_atom_site_label")||Q.columns.includes("_atom_site_fract_x")||Q.columns.includes("_atom_site_Cartn_x")),y=d.find(Q=>Q.columns.includes("_atom_site_aniso_label")),v=d.find(Q=>Q.columns.includes("_atom_site_moment_label"));if(!f)return{lattice:m,species:[],positions:[],pbc:[!0,!0,!0],title:l,spaceGroup:c||void 0};let _=(Q,j)=>Q.columns.indexOf(j),C=_(f,"_atom_site_label"),S=_(f,"_atom_site_type_symbol"),T=_(f,"_atom_site_fract_x"),I=_(f,"_atom_site_fract_y"),M=_(f,"_atom_site_fract_z"),b=_(f,"_atom_site_Cartn_x"),P=_(f,"_atom_site_Cartn_y"),L=_(f,"_atom_site_Cartn_z"),D=_(f,"_atom_site_occupancy"),B=T>=0&&I>=0&&M>=0,W=b>=0&&P>=0&&L>=0,H=[],Z=[],V=[],et=[],nt=!1;for(let Q of f.rows){let j="",at="";if(C>=0&&Q[C]&&(at=Q[C]),S>=0&&Q[S]?j=Q[S].replace(/[^a-zA-Z]/g,""):at&&(j=at.replace(/[0-9+\-]/g,"")),!j)continue;j=j.charAt(0).toUpperCase()+j.slice(1).toLowerCase();let zt=1;if(D>=0&&Q[D]){let Ct=Qt(Q[D]);Number.isFinite(Ct)&&Ct>=0&&(zt=Ct,zt<1-1e-6&&(nt=!0))}if(B)H.push(j),Z.push(at),et.push(zt),V.push([Qt(Q[T]),Qt(Q[I]),Qt(Q[M])]);else if(W){H.push(j),Z.push(at),et.push(zt);let Ct=Qt(Q[b]),jt=Qt(Q[P]),F=Qt(Q[L]);V.push(kx(m,Ct,jt,F))}}let rt=new Map;if(y){let Q=_(y,"_atom_site_aniso_label"),j=_(y,"_atom_site_aniso_U_11"),at=_(y,"_atom_site_aniso_U_22"),zt=_(y,"_atom_site_aniso_U_33"),Ct=_(y,"_atom_site_aniso_U_12"),jt=_(y,"_atom_site_aniso_U_13"),F=_(y,"_atom_site_aniso_U_23"),ge=_(y,"_atom_site_aniso_B_11"),Ht=_(y,"_atom_site_aniso_B_22"),Pt=_(y,"_atom_site_aniso_B_33"),Et=_(y,"_atom_site_aniso_B_12"),Yt=_(y,"_atom_site_aniso_B_13"),Tt=_(y,"_atom_site_aniso_B_23"),R=j>=0&&at>=0&&zt>=0,E=!R&&ge>=0&&Ht>=0&&Pt>=0,z=1/(8*Math.PI*Math.PI);if(Q>=0&&(R||E))for(let Y of y.rows){let J=Y[Q];J&&(R?rt.set(J,{U11:Qt(Y[j]),U22:Qt(Y[at]),U33:Qt(Y[zt]),U12:Ct>=0?Qt(Y[Ct]):0,U13:jt>=0?Qt(Y[jt]):0,U23:F>=0?Qt(Y[F]):0}):rt.set(J,{U11:Qt(Y[ge])*z,U22:Qt(Y[Ht])*z,U33:Qt(Y[Pt])*z,U12:Et>=0?Qt(Y[Et])*z:0,U13:Yt>=0?Qt(Y[Yt])*z:0,U23:Tt>=0?Qt(Y[Tt])*z:0}))}}let pt=new Map;if(v){let Q=_(v,"_atom_site_moment_label"),j=_(v,"_atom_site_moment_cartn_x"),at=_(v,"_atom_site_moment_cartn_y"),zt=_(v,"_atom_site_moment_cartn_z"),Ct=_(v,"_atom_site_moment_crystalaxis_x"),jt=_(v,"_atom_site_moment_crystalaxis_y"),F=_(v,"_atom_site_moment_crystalaxis_z"),ge=j>=0&&at>=0&&zt>=0,Ht=!ge&&Ct>=0&&jt>=0&&F>=0;if(Q>=0&&(ge||Ht))for(let Pt of v.rows){let Et=Pt[Q];if(Et)if(ge)pt.set(Et,[Qt(Pt[j]),Qt(Pt[at]),Qt(Pt[zt])]);else{let Yt=Qt(Pt[Ct]),Tt=Qt(Pt[jt]),R=Qt(Pt[F]);pt.set(Et,Il(m,[Yt,Tt,R]))}}}let Dt,q,tt,_t,ot;if(h.length>0&&B){let Q=Hx(H,Z,V,h);if(Dt=Q.species,q=Q.fractional.map(j=>Il(m,j)),rt.size>0&&(tt=Q.parentLabels.map(j=>{let at=j?rt.get(j):void 0;return at?{...at}:null})),nt){let j=new Map;for(let at=0;at<Z.length;at++)j.set(Z[at],et[at]);_t=Q.parentLabels.map(at=>j.get(at)??1)}pt.size>0&&(ot=Q.parentLabels.map(j=>{let at=j?pt.get(j):void 0;return at?[at[0],at[1],at[2]]:[0,0,0]}))}else Dt=H,q=B?V.map(Q=>Il(m,Q)):f.rows.filter(Q=>W).map(Q=>[Qt(Q[b]),Qt(Q[P]),Qt(Q[L])]),rt.size>0&&(tt=Z.map(Q=>{let j=Q?rt.get(Q):void 0;return j?{...j}:null})),nt&&(_t=[...et]),pt.size>0&&(ot=Z.map(Q=>{let j=Q?pt.get(Q):void 0;return j?[j[0],j[1],j[2]]:[0,0,0]}));return{lattice:m,species:Dt,positions:q,pbc:[!0,!0,!0],title:l,spaceGroup:c||void 0,cellParams:{a:e,b:n,c:s,alpha:r,beta:o,gamma:a},symmetryOps:h.length>0?h:void 0,...tt?{thermalAniso:tt}:{},..._t?{occupancy:_t}:{},...ot?{atomVectors:{kind:"magmom",label:"Magnetic moment",unit:"\u03BCB",values:ot}}:{}}}function Hx(i,t,e,n){let s=[],r=[],o=[],a=new Set,l=.01;for(let c=0;c<i.length;c++){let[h,d,u]=e[c];for(let p of n){let g=Vx(p);if(!g)continue;let x=g[0][0]*h+g[0][1]*d+g[0][2]*u+g[0][3],m=g[1][0]*h+g[1][1]*d+g[1][2]*u+g[1][3],f=g[2][0]*h+g[2][1]*d+g[2][2]*u+g[2][3];x=(x%1+1)%1,m=(m%1+1)%1,f=(f%1+1)%1;let y=`${i[c]}_${x.toFixed(3)}_${m.toFixed(3)}_${f.toFixed(3)}`,v=!1;for(let _ of a)if(_.startsWith(i[c]+"_")){let C=_.split("_"),S=parseFloat(C[1]),T=parseFloat(C[2]),I=parseFloat(C[3]);if(Math.abs(x-S)<l&&Math.abs(m-T)<l&&Math.abs(f-I)<l){v=!0;break}}v||(a.add(y),s.push(i[c]),r.push([x,m,f]),o.push(t[c]))}}return{species:s,fractional:r,parentLabels:o}}function Vx(i){let t=i.split(",").map(n=>n.trim());if(t.length!==3)return null;let e=[];for(let n of t){let s=[0,0,0,0],r=n.replace(/\s/g,""),o=/([+-]?)(\d+\/\d+|\d+\.?\d*)?([xyz])?/g,a;for(;(a=o.exec(r))!==null;){if(a[0]===""){o.lastIndex++;continue}if(!a[2]&&!a[3])continue;let l=a[1]==="-"?-1:1;if(a[3]){let c=a[2]?Qh(a[2]):1,h="xyz".indexOf(a[3]);s[h]=l*c}else a[2]&&(s[3]+=l*Qh(a[2]))}e.push(s)}return e}function Qh(i){if(i.includes("/")){let[t,e]=i.split("/").map(Number);return t/e}return parseFloat(i)}function Il(i,t){return[t[0]*i[0][0]+t[1]*i[1][0]+t[2]*i[2][0],t[0]*i[0][1]+t[1]*i[1][1]+t[2]*i[2][1],t[0]*i[0][2]+t[1]*i[1][2]+t[2]*i[2][2]]}function kx(i,t,e,n){let s=i[0],r=i[1],o=i[2],a=s[0]*(r[1]*o[2]-r[2]*o[1])-s[1]*(r[0]*o[2]-r[2]*o[0])+s[2]*(r[0]*o[1]-r[1]*o[0]);if(Math.abs(a)<1e-10)return[0,0,0];let l=1/a;return[((r[1]*o[2]-r[2]*o[1])*t+(r[2]*o[0]-r[0]*o[2])*e+(r[0]*o[1]-r[1]*o[0])*n)*l,((s[2]*o[1]-s[1]*o[2])*t+(s[0]*o[2]-s[2]*o[0])*e+(s[1]*o[0]-s[0]*o[1])*n)*l,((s[1]*r[2]-s[2]*r[1])*t+(s[2]*r[0]-s[0]*r[2])*e+(s[0]*r[1]-s[1]*r[0])*n)*l]}function ss(i){let t=i.trim().split(/\s+/);return Qt(t[t.length-1])}function Qt(i){return parseFloat(i.replace(/\([^)]*\)/g,""))}function Gx(i){let t=[],e=0;for(;e<i.length;){if(i[e]===" "||i[e]==="	"){e++;continue}if(i[e]==="'"||i[e]==='"'){let n=i[e];e++;let s=e;for(;e<i.length&&i[e]!==n;)e++;t.push(i.slice(s,e)),e++}else{let n=e;for(;e<i.length&&i[e]!==" "&&i[e]!=="	";)e++;t.push(i.slice(n,e))}}return t}function Wx(i,t,e,n,s,r){if(i<1e-9||t<1e-9||e<1e-9)throw new Error(`Degenerate lattice: cell length \u2264 0 (a=${i}, b=${t}, c=${e})`);let o=Math.PI/180,a=Math.sin(r*o);if(Math.abs(a)<1e-6)throw new Error(`Degenerate lattice: gamma \u2248 0 or 180 (\u03B3=${r}\xB0), cell vectors collinear`);let l=Math.cos(n*o),c=Math.cos(s*o),h=Math.cos(r*o),d=[i,0,0],u=[t*h,t*a,0],p=e*c,g=e*(l-c*h)/a,x=e*e-p*p-g*g;if(x<-1e-6)throw new Error(`Degenerate lattice: angles inconsistent (\u03B1=${n}\xB0, \u03B2=${s}\xB0, \u03B3=${r}\xB0), cz\xB2 = ${x.toFixed(6)}`);let m=Math.sqrt(Math.max(0,x));return[d,u,[p,g,m]]}function Ls(i){let t=i.split(`
`).map(m=>m.trim()).filter(m=>m.length>0),e=t[0]||"",n=parseFloat(t[1]),s=[];for(let m=2;m<=4;m++){let f=t[m].split(/\s+/).map(Number);s.push([f[0]*n,f[1]*n,f[2]*n])}let r,o,a,l=t[5].split(/\s+/);l.every(m=>/^\d+$/.test(m))?(r=e.split(/\s+/).filter(m=>/^[A-Z][a-z]?$/.test(m)),o=l.map(Number),a=6):(r=l,o=t[6].split(/\s+/).map(Number),a=7),t[a]&&/^[sS]/.test(t[a])&&a++;let c=t[a],h=/^[dD]/.test(c);a++;let d=[],u=[],p=0;for(let m=0;m<r.length;m++)for(let f=0;f<o[m];f++){let y=t[a+p].split(/\s+/).map(Number);if(d.push(r[m]),h){let[v,_,C]=y,S=v*s[0][0]+_*s[1][0]+C*s[2][0],T=v*s[0][1]+_*s[1][1]+C*s[2][1],I=v*s[0][2]+_*s[1][2]+C*s[2][2];u.push([S,T,I])}else u.push([y[0]*n,y[1]*n,y[2]*n]);p++}let g=Xx(e,d.length),x={lattice:s,species:d,positions:u,pbc:[!0,!0,!0],title:e};return g&&(x.atomVectors={kind:"magmom",label:"Magnetic moment",unit:"\u03BCB",values:g}),x}function Xx(i,t){let e=i.match(/MAGMOM\s*=\s*(.*)$/i);if(!e)return null;let n=e[1].split(/[\s,]+/).filter(Boolean);if(n.some(o=>o.includes("*")))return console.warn("[magmom] compressed MAGMOM form (k*v) not supported, ignoring"),null;let s=n.map(o=>parseFloat(o));if(s.some(o=>!Number.isFinite(o)))return console.warn("[magmom] MAGMOM contains non-numeric tokens, ignoring"),null;let r=[];if(s.length===t){for(let o of s)r.push([0,0,o]);return r}if(s.length===3*t){for(let o=0;o<t;o++)r.push([s[3*o],s[3*o+1],s[3*o+2]]);return r}return console.warn(`[magmom] MAGMOM token count ${s.length} matches neither N=${t} (collinear) nor 3N=${3*t} (non-collinear), ignoring`),null}var by=new TextEncoder().encode("BEGIN_BLOCK_DATAGRID_3D");function nu(i){if(i.length===0)return null;let t=1/0;for(let e of i){let n=e.length-4;if(n<0)return null;n<t&&(t=n)}if(t>=3){let e=[];for(let n of i){let s=parseFloat(n[4]),r=parseFloat(n[5]),o=parseFloat(n[6]);if(!Number.isFinite(s)||!Number.isFinite(r)||!Number.isFinite(o))return null;e.push([s,r,o])}return e.every(n=>Math.abs(n[0])+Math.abs(n[1])+Math.abs(n[2])<1e-8)?null:{kind:"generic",label:"Atomic vector (col 5\u20137)",values:e}}if(t===1){let e=[];for(let n of i){let s=parseFloat(n[4]);if(!Number.isFinite(s))return null;e.push([0,0,s])}return e.every(n=>Math.abs(n[2])<1e-8)?null:{kind:"generic",label:"Atomic scalar (col 5, along z)",values:e}}return null}function lo(i){let t=i.split(`
`),e=[],n=[],s=[],r=[],o=[!1,!1,!1],a="",l=0;for(;l<t.length;){let u=t[l].trim();if(u==="CRYSTAL"){o=[!0,!0,!0],l++;continue}if(u==="SLAB"){o=[!0,!0,!1],l++;continue}if(u==="POLYMER"){o=[!0,!1,!1],l++;continue}if(u==="MOLECULE"||u==="ATOMS"){o=[!1,!1,!1],l++;continue}if(u==="PRIMVEC"||u==="CONVVEC"){e=[];for(let p=1;p<=3;p++){let g=t[l+p].trim().split(/\s+/).map(Number);e.push([g[0],g[1],g[2]])}l+=4;continue}if(u.startsWith("PRIMCOORD")||u.startsWith("CONVCOORD")){l++;let p=t[l].trim().split(/\s+/),g=parseInt(p[0]);l++;for(let x=0;x<g;x++){let m=t[l+x].trim().split(/\s+/),f=m[0],y;/^\d+$/.test(f)?y=ns(parseInt(f)).symbol:y=f.charAt(0).toUpperCase()+f.slice(1).toLowerCase(),n.push(y),s.push([parseFloat(m[1]),parseFloat(m[2]),parseFloat(m[3])]),r.push(m)}l+=g;continue}if(u&&!u.startsWith("#")&&!u.startsWith("_")&&n.length===0){let p=u.split(/\s+/);if(p.length>=4){let g=p[0];if(/^\d+$/.test(g)||/^[A-Z][a-z]?$/.test(g)){let x;/^\d+$/.test(g)?x=ns(parseInt(g)).symbol:x=g,n.push(x),s.push([parseFloat(p[1]),parseFloat(p[2]),parseFloat(p[3])]),r.push(p),l++;continue}}}l++}e.length===0&&(e=[[10,0,0],[0,10,0],[0,0,10]]);let c,h=i.indexOf("BEGIN_BLOCK_DATAGRID_3D");h>=0&&(c=iu(i.slice(h)),c&&su(c,e));let d=nu(r)??void 0;return{lattice:e,species:n,positions:s,pbc:o,title:a,volumetric:c,atomVectors:d}}function Dl(i){let t=i.split(`
`),e=[!0,!0,!0],n="",s=0;for(let x=0;x<t.length;x++){let m=t[x].trim();if(m.startsWith("ANIMSTEPS")){let f=m.split(/\s+/);s=parseInt(f[1]||"0")}m==="SLAB"?e=[!0,!0,!1]:m==="POLYMER"?e=[!0,!1,!1]:(m==="MOLECULE"||m==="ATOMS")&&(e=[!1,!1,!1])}if(s<=1){let x=lo(i),{volumetric:m,...f}=x;return{trajectory:{frames:[f],latticeMode:"fixed"},volumetric:m}}let r=null,o=new Array(s).fill(null),a=[],l=0;for(;l<t.length;){let x=t[l].trim();if(x.startsWith("PRIMVEC")||x.startsWith("CONVVEC")){let m=x.split(/\s+/),f=[];for(let y=1;y<=3;y++){let v=t[l+y].trim().split(/\s+/).map(Number);f.push([v[0],v[1],v[2]])}if(m.length>1&&/^\d+$/.test(m[1])){let y=parseInt(m[1])-1;y>=0&&y<s&&(o[y]=f)}else r=f;l+=4;continue}if(x.startsWith("PRIMCOORD")||x.startsWith("CONVCOORD")){let m=x.split(/\s+/),f=m.length>1&&/^\d+$/.test(m[1])?parseInt(m[1])-1:a.length;l++;let y=t[l].trim().split(/\s+/),v=parseInt(y[0]);l++;let _=[],C=[],S=[];for(let T=0;T<v;T++){let I=t[l+T].trim().split(/\s+/),M=I[0],b;/^\d+$/.test(M)?b=ns(parseInt(M)).symbol:b=M.charAt(0).toUpperCase()+M.slice(1).toLowerCase(),_.push(b),C.push([parseFloat(I[1]),parseFloat(I[2]),parseFloat(I[3])]),S.push(I)}for(;a.length<=f;)a.push({species:[],positions:[],rows:[]});a[f]={species:_,positions:C,rows:S},l+=v;continue}l++}let c=o.some(x=>x!==null),h=c?"per-frame":"fixed",d=r||[[10,0,0],[0,10,0],[0,0,10]],u=[];for(let x=0;x<s;x++){if(!a[x]||a[x].species.length===0)continue;let m=c&&(o[x]||r)||d,f=nu(a[x].rows)??void 0;u.push({lattice:m,species:a[x].species,positions:a[x].positions,pbc:e,title:n,atomVectors:f})}let p,g=i.indexOf("BEGIN_BLOCK_DATAGRID_3D");return g>=0&&(p=iu(i.slice(g)),p&&u[0]&&su(p,u[0].lattice)),{trajectory:{frames:u,latticeMode:h},volumetric:p}}function iu(i){let t=i.split(`
`),e=0;for(;e<t.length&&!t[e].trim().startsWith("BEGIN_DATAGRID_3D");)e++;if(e>=t.length)return;e++;let n=t[e].trim().split(/\s+/).map(Number),s=n[0],r=n[1],o=n[2];e++;let a=t[e].trim().split(/\s+/).map(Number),l=[a[0],a[1],a[2]];e++;let c=[];for(let m=0;m<3;m++){let f=t[e].trim().split(/\s+/).map(Number);c.push([f[0],f[1],f[2]]),e++}let h=s*r*o,d=new Float32Array(h),u=0,p=0,g=0,x=0;for(;e<t.length&&x<h;){let m=t[e].trim();if(m.startsWith("END_DATAGRID_3D")||m.startsWith("END_BLOCK_DATAGRID_3D"))break;let f=m.split(/\s+/);for(let y of f)x<h&&y!==""&&(d[u*r*o+p*o+g]=parseFloat(y),x++,u++,u===s&&(u=0,p++,p===r&&(p=0,g++)));e++}return qx({origin:l,lattice:c,dims:[s,r,o],data:d})}function qx(i){let[t,e,n]=i.dims,s=i.data,r=(y,v,_)=>s[y*e*n+v*n+_],o=0;for(let y=0;y<s.length;y++){let v=Math.abs(s[y]);v>o&&(o=v)}let a=1e-5*(o||1),l=()=>{for(let y=0;y<e;y++)for(let v=0;v<n;v++)if(Math.abs(r(0,y,v)-r(t-1,y,v))>a)return!1;return!0},c=()=>{for(let y=0;y<t;y++)for(let v=0;v<n;v++)if(Math.abs(r(y,0,v)-r(y,e-1,v))>a)return!1;return!0},h=()=>{for(let y=0;y<t;y++)for(let v=0;v<e;v++)if(Math.abs(r(y,v,0)-r(y,v,n-1))>a)return!1;return!0},d=t>2&&l(),u=e>2&&c(),p=n>2&&h();if(!d&&!u&&!p)return i;let g=d?t-1:t,x=u?e-1:e,m=p?n-1:n,f=new Float32Array(g*x*m);for(let y=0;y<g;y++)for(let v=0;v<x;v++)for(let _=0;_<m;_++)f[y*x*m+v*m+_]=r(y,v,_);return{origin:i.origin,lattice:i.lattice,dims:[g,x,m],data:f}}function su(i,t){if(t.length!==3)return;let e=s=>Math.hypot(s[0],s[1],s[2]),n=Math.max(e(t[0]),e(t[1]),e(t[2]))||1;if(!(e(i.origin)>.001*n)){for(let s=0;s<3;s++){let r=i.lattice[s],o=t[s],a=e(r),l=e(o);if(a===0||l===0)return;let c=r[1]*o[2]-r[2]*o[1],h=r[2]*o[0]-r[0]*o[2],d=r[0]*o[1]-r[1]*o[0];if(e([c,h,d])/(a*l)>.001)return;let u=a/l;if(u<.66||u>1.51)return}i.lattice=[[t[0][0],t[0][1],t[0][2]],[t[1][0],t[1][1],t[1][2]],[t[2][0],t[2][1],t[2][2]]]}}function Yx(i,t){let e=t;for(;e<i.length&&i[e].trim().length===0;)e++;let n=i[e++];for(;e<i.length&&i[e].trim().length===0;)e++;let s=parseFloat(i[e++].trim()),r=[];for(let h=0;h<3;h++){for(;e<i.length&&i[e].trim().length===0;)e++;let d=i[e++].trim().split(/\s+/).map(Number);r.push([d[0]*s,d[1]*s,d[2]*s])}for(;e<i.length&&i[e].trim().length===0;)e++;let a=i[e++].trim().split(/\s+/),l,c;if(a.every(h=>/^\d+$/.test(h)))c=a.map(Number),l=n.trim().split(/\s+/).filter(h=>/^[A-Z][a-z]?$/.test(h)),l.length!==c.length&&(l=c.map((h,d)=>`X${d+1}`));else{for(l=a;e<i.length&&i[e].trim().length===0;)e++;c=i[e++].trim().split(/\s+/).map(Number)}return{scale:s,lattice:r,species:l,counts:c,posStart:e}}function Ul(i,t){let e=[];for(let n=0;n<i.length;n++)for(let s=0;s<t[n];s++)e.push(i[n]);return e}function Zx(i,t,e,n){return[t*i[0][0]+e*i[1][0]+n*i[2][0],t*i[0][1]+e*i[1][1]+n*i[2][1],t*i[0][2]+e*i[1][2]+n*i[2][2]]}function co(i){let t=i.split(`
`);if(t.length<7)throw new Error("XDATCAR too short \u2014 missing header");let e=Yx(t,0),n=e.lattice,s=Ul(e.species,e.counts),r=s.length;if(r===0)throw new Error("XDATCAR header parsed but atom count = 0");let o="fixed",a=[],l=e.posStart;for(;l<t.length;){let c=t[l].trim();if(c.length===0||c.startsWith("#")){l++;continue}if(c.startsWith("Direct configuration=")||c.startsWith("Cartesian configuration=")){let d=c.startsWith("Direct");l++;let u=[];for(let p=0;p<r;p++){if(l+p>=t.length)throw new Error(`XDATCAR: frame ${a.length+1} truncated (expected ${r} atoms)`);let g=t[l+p].trim().split(/\s+/).map(Number),x=g[0],m=g[1],f=g[2];u.push(d?Zx(n,x,m,f):[x*e.scale,m*e.scale,f*e.scale])}l+=r,a.push({lattice:n,species:[...s],positions:u,pbc:[!0,!0,!0]});continue}let h=c.split(/\s+/);if(h.length===1&&/^[+-]?\d+\.?\d*([eE][+-]?\d+)?$/.test(h[0])){let d=[],u=!0;for(let p=1;p<=3;p++){let g=(t[l+p]||"").trim().split(/\s+/).map(Number);if(g.length<3||g.some(x=>!Number.isFinite(x))){u=!1;break}d.push([g[0],g[1],g[2]])}if(u){o="per-frame";let p=parseFloat(h[0]);for(n=d.map(m=>[m[0]*p,m[1]*p,m[2]*p]),l+=4;l<t.length&&t[l].trim().length===0;)l++;let g=(t[l]||"").trim(),x=g.split(/\s+/);if(g&&!g.startsWith("Direct")&&!g.startsWith("Cartesian")&&x.length>0&&/^[A-Z]/.test(x[0])){for(s=Ul(x,[]),l++;l<t.length&&t[l].trim().length===0;)l++;let m=(t[l]||"").trim().split(/\s+/).map(Number);if(s=Ul(x,m),l++,s.length!==r)throw new Error(`XDATCAR variable-cell: atom count changed mid-file (${r} \u2192 ${s.length})`)}continue}}l++}if(a.length===0)throw new Error("XDATCAR: no Direct configuration blocks found");return{frames:a,latticeMode:o}}function ru(i){return co(i).frames[0]}function ou(i){let t=i.split(`
`),e=-1,n=!1,s=0,r=0;for(let b=0;b<t.length;b++){let P=t[b].trim();if(b===5||b===6){let L=P.split(/\s+/);L.every(D=>/^\d+$/.test(D))&&(r=L.reduce((D,B)=>D+parseInt(B),0))}if(b>=7&&!n&&/^[dDcCkK]/.test(P)){n=!0;continue}if(n&&s<r&&(s++,s===r)){e=b+1;break}}e<0&&(e=8);let o=t.slice(0,e).join(`
`),a=Ls(o),l=e;for(;l<t.length&&t[l].trim()==="";)l++;let c=t[l].trim().split(/\s+/).map(Number),h=c[0],d=c[1],u=c[2];l++;let p=h*d*u,g=new Float32Array(p),x=0,m=0,f=0,y=0;for(let b=l;b<t.length&&y<p;b++){let P=t[b].trim();if(P===""||P.startsWith("augmentation"))break;let L=P.split(/\s+/);for(let D of L)y<p&&D!==""&&(g[x*d*u+m*u+f]=parseFloat(D),y++,x++,x===h&&(x=0,m++,m===d&&(m=0,f++)))}let v=a.lattice,_=v[0],C=v[1],S=v[2],I=1/Math.abs(_[0]*(C[1]*S[2]-C[2]*S[1])-_[1]*(C[0]*S[2]-C[2]*S[0])+_[2]*(C[0]*S[1]-C[1]*S[0]));for(let b=0;b<g.length;b++)g[b]*=I;let M={origin:[0,0,0],lattice:a.lattice,dims:[h,d,u],data:g};return{structure:a,volumetric:M}}var Ds=.529177249;function jx(i){let t=i[0].trim(),e=i[2].trim().split(/\s+/).map(Number),n=Math.abs(Math.round(e[0])),s=[e[1]*Ds,e[2]*Ds,e[3]*Ds],r=[0,0,0],o=[];for(let d=0;d<3;d++){let u=i[3+d].trim().split(/\s+/).map(Number);r[d]=Math.abs(Math.round(u[0]));let p=e[0]>=0?Ds:1;o.push([u[1]*p*r[d],u[2]*p*r[d],u[3]*p*r[d]])}let a=o,l=[],c=[],h=e[0]>=0?Ds:1;for(let d=0;d<n;d++){let u=i[6+d].trim().split(/\s+/).map(Number),p=Math.round(u[0]),g=ns(p);l.push(g.symbol),c.push([u[2]*h,u[3]*h,u[4]*h])}return{structure:{lattice:a,species:l,positions:c,pbc:[!0,!0,!0],title:t},origin:s,lattice:a,dims:r,nAtoms:n}}function au(i){let t=i.split(`
`),e=jx(t),n=e.dims[0]*e.dims[1]*e.dims[2],s=new Float32Array(n),r=6+e.nAtoms,o=0;for(let a=r;a<t.length&&o<n;a++){let l=t[a].trim().split(/\s+/);for(let c of l)o<n&&c!==""&&(s[o++]=parseFloat(c))}return{structure:e.structure,volumetric:{origin:e.origin,lattice:e.lattice,dims:e.dims,data:s}}}var Kx={magmom:{kind:"magmom",label:"Magnetic moment",unit:"\u03BCB"},magmoms:{kind:"magmom",label:"Magnetic moment",unit:"\u03BCB"},forces:{kind:"force",label:"Force",unit:"eV/\xC5"},force:{kind:"force",label:"Force",unit:"eV/\xC5"},velocities:{kind:"velocity",label:"Velocity",unit:"\xC5/fs"},velo:{kind:"velocity",label:"Velocity",unit:"\xC5/fs"},displacements:{kind:"displacement",label:"Displacement",unit:"\xC5"}};function Jx(i){let t=i.match(/Properties=([^\s]+)/i);if(!t)return null;let e=t[1].split(":");if(e.length<3)return null;let n=0;for(let s=0;s+2<e.length;s+=3){let r=e[s],o=parseInt(e[s+2]);if(!Number.isFinite(o)||o<=0)return null;let a=Kx[r.toLowerCase()];if(a&&(o===1||o===3))return{offset:n,width:o,meta:a};n+=o}return null}function lu(i,t){let e=t,n=parseInt(i[e]);if(!Number.isFinite(n)||n<=0)throw new Error(`XYZ: invalid atom count at line ${e+1}: "${i[e]}"`);e++;let s=i[e]||"";e++;let r=[[20,0,0],[0,20,0],[0,0,20]],o=[!1,!1,!1],a=s.match(/Lattice="([^"]+)"/i);if(a){let g=a[1].split(/\s+/).map(Number);g.length===9&&(r=[[g[0],g[1],g[2]],[g[3],g[4],g[5]],[g[6],g[7],g[8]]],o=[!0,!0,!0])}let l=s.match(/pbc="([^"]+)"/i);if(l){let g=l[1].split(/\s+/);o=[g[0]==="T",g[1]==="T",g[2]==="T"]}let c=[],h=[],d=Jx(s),u=[];for(let g=0;g<n;g++){if(e+g>=i.length)throw new Error(`XYZ: frame at line ${t+1} truncated (expected ${n} atoms)`);let x=i[e+g].split(/\s+/);if(x.length<4)continue;let m=x[0];if(/^\d+$/.test(m)?m="X":m=m.charAt(0).toUpperCase()+m.slice(1).toLowerCase(),c.push(m),h.push([parseFloat(x[1]),parseFloat(x[2]),parseFloat(x[3])]),d){let f=d.offset;if(d.width===3){let y=parseFloat(x[f]),v=parseFloat(x[f+1]),_=parseFloat(x[f+2]);u.push([Number.isFinite(y)?y:0,Number.isFinite(v)?v:0,Number.isFinite(_)?_:0])}else{let y=parseFloat(x[f]);u.push([0,0,Number.isFinite(y)?y:0])}}}e+=n;let p=d&&u.some(g=>Math.abs(g[0])+Math.abs(g[1])+Math.abs(g[2])>1e-8);return{frame:{lattice:r,species:c,positions:h,pbc:o,title:s,...p?{atomVectors:{...d.meta,values:u}}:{}},next:e}}function cu(i){let t=i.split(`
`).map(e=>e.trim());return lu(t,0).frame}function hu(i){let t=i.split(`
`).map(r=>r.trim()),e=[],n=0;for(;n<t.length&&t[n].length===0;)n++;if(n>=t.length)throw new Error("XYZ: empty file");for(;n<t.length;){if(t[n].length===0){n++;continue}let r=parseInt(t[n]);if(!Number.isFinite(r)||r<=0)break;let{frame:o,next:a}=lu(t,n);e.push(o),n=a}if(e.length===0)throw new Error("XYZ: no valid frames found");let s=!0;for(let r=1;r<e.length&&s;r++){let o=e[0].lattice,a=e[r].lattice;for(let l=0;l<3&&s;l++)for(let c=0;c<3&&s;c++)o[l][c]!==a[l][c]&&(s=!1)}if(s){let r=e[0].lattice;for(let o=1;o<e.length;o++)e[o]={...e[o],lattice:r}}return{frames:e,latticeMode:s?"fixed":"per-frame"}}function uu(i){let t=i.split(`
`),e=[[20,0,0],[0,20,0],[0,0,20]],n=[!1,!1,!1],s="",r=[],o=[];for(let a of t){let l=a.substring(0,6).trim();if(l==="TITLE"&&(s=a.substring(10).trim()),l==="CRYST1"){let c=parseFloat(a.substring(6,15)),h=parseFloat(a.substring(15,24)),d=parseFloat(a.substring(24,33)),u=parseFloat(a.substring(33,40)),p=parseFloat(a.substring(40,47)),g=parseFloat(a.substring(47,54));e=Qx(c,h,d,u,p,g),n=[!0,!0,!0]}if(l==="ATOM"||l==="HETATM"){let c=parseFloat(a.substring(30,38)),h=parseFloat(a.substring(38,46)),d=parseFloat(a.substring(46,54)),u=a.substring(76,78).trim();u||(u=a.substring(12,16).trim().replace(/[0-9]/g,"")),u=u.charAt(0).toUpperCase()+u.slice(1).toLowerCase(),r.push(u),o.push([c,h,d])}}return{lattice:e,species:r,positions:o,pbc:n,title:s}}function Qx(i,t,e,n,s,r){if(i<1e-9||t<1e-9||e<1e-9)throw new Error(`Degenerate lattice in CRYST1: cell length \u2264 0 (a=${i}, b=${t}, c=${e})`);let o=Math.PI/180,a=Math.sin(r*o);if(Math.abs(a)<1e-6)throw new Error(`Degenerate lattice in CRYST1: gamma \u2248 0 or 180 (\u03B3=${r}\xB0), cell vectors collinear`);let l=Math.cos(n*o),c=Math.cos(s*o),h=Math.cos(r*o),d=[i,0,0],u=[t*h,t*a,0],p=e*c,g=e*(l-c*h)/a,x=e*e-p*p-g*g;if(x<-1e-6)throw new Error(`Degenerate lattice in CRYST1: angles inconsistent (\u03B1=${n}\xB0, \u03B2=${s}\xB0, \u03B3=${r}\xB0)`);let m=Math.sqrt(Math.max(0,x));return[d,u,[p,g,m]]}var Us=.529177249;function Fl(i){let t=i.split(`
`),e=[],n=[],s=[],r="QE input/output",o=-1,a=-1,l=0,c=[0,0,0,0,0,0],h={};for(let d=0;d<t.length;d++){let p=t[d].replace(/!.*$/,"").trim();if(p!==""){p.startsWith("CELL_PARAMETERS")&&(o=d),p.startsWith("ATOMIC_POSITIONS")&&(a=d);for(let g of p.split(/[,;]/)){let x=g.match(/\bibrav\s*=\s*(-?\d+)/i);x&&(l=parseInt(x[1]));let m=g.match(/\bcelldm\s*\(\s*(\d)\s*\)\s*=\s*([0-9.eEdD+\-]+)/i);if(m){let y=parseInt(m[1]);y>=1&&y<=6&&(c[y-1]=rs(m[2]))}let f=g.match(/\b(A|B|C|cosAB|cosAC|cosBC)\s*=\s*([0-9.eEdD+\-]+)/);if(f){let y=f[1];h[y]=rs(f[2])}}}}if(o>=0){let d=t[o].toLowerCase(),u=d.includes("bohr"),p=d.includes("alat"),g=c[0]>0?c[0]*Us:h.A??1,x=u?Us:p?g:1;e=[];for(let m=1;m<=3;m++){let f=t[o+m].trim().split(/\s+/).map(rs);e.push([f[0]*x,f[1]*x,f[2]*x])}}else if(l!==0){let d=t_(c,h);d&&(e=e_(l,c,h,d))}if(a>=0){let d=t[a].toLowerCase(),u=d.includes("crystal"),p=d.includes("bohr"),g=d.includes("angstrom"),x=!u&&!p&&!g,m=c[0]>0?c[0]*Us:h.A??1,f=p?Us:x?m:1;for(let y=a+1;y<t.length;y++){let v=t[y].replace(/!.*$/,"").trim();if(v===""||v.startsWith("End")||v.startsWith("CELL")||v.startsWith("ATOMIC")||v.startsWith("K_POINTS")||v.startsWith("OCCUPATIONS")||v.startsWith("CONSTRAINTS")||v.startsWith("HUBBARD")||v.startsWith("SOLVENTS")||v.startsWith("&"))break;let _=v.split(/\s+/);if(_.length<4)break;let C=_[0].charAt(0).toUpperCase()+_[0].slice(1).toLowerCase();n.push(C);let S=rs(_[1]),T=rs(_[2]),I=rs(_[3]);u&&e.length===3?s.push([S*e[0][0]+T*e[1][0]+I*e[2][0],S*e[0][1]+T*e[1][1]+I*e[2][1],S*e[0][2]+T*e[1][2]+I*e[2][2]]):s.push([S*f,T*f,I*f])}}if(e.length!==3||s.length===0)throw new Error("Quantum ESPRESSO parser: missing lattice or atoms. Expected either CELL_PARAMETERS (ibrav=0) or ibrav>0 with celldm/(A,B,C,...) plus ATOMIC_POSITIONS.");return{lattice:e,species:n,positions:s,pbc:[!0,!0,!0],title:r}}function rs(i){return parseFloat(i.replace(/[dD]/,"e"))}function t_(i,t){if(i[0]>0){let e=i[0]*Us,n=i[1]>0?i[1]*e:e,s=i[2]>0?i[2]*e:e;return{a:e,b:n,c:s}}return t.A!=null&&t.A>0?{a:t.A,b:t.B??t.A,c:t.C??t.A}:null}function e_(i,t,e,n){let{a:s,b:r,c:o}=n,a=(g,x)=>g!==0?g:x??0,l=a(t[3],e.cosBC??e.cosAB??e.cosAC),c=a(t[3],e.cosAB),h=a(t[4],e.cosAC),d=a(t[3],e.cosBC),u=a(t[4],e.cosAC),p=a(t[5],e.cosAB);switch(i){case 1:return[[s,0,0],[0,s,0],[0,0,s]];case 2:return[[-s/2,0,s/2],[0,s/2,s/2],[-s/2,s/2,0]];case 3:return[[s/2,s/2,s/2],[-s/2,s/2,s/2],[-s/2,-s/2,s/2]];case-3:return[[-s/2,s/2,s/2],[s/2,-s/2,s/2],[s/2,s/2,-s/2]];case 4:return[[s,0,0],[-s/2,s*Math.sqrt(3)/2,0],[0,0,o]];case 5:case-5:{let g=l,x=Math.sqrt((1-g)/2),m=Math.sqrt((1-g)/6),f=Math.sqrt((1+2*g)/3);if(i===5)return[[s*x,-s*m,s*f],[0,2*s*m,s*f],[-s*x,-s*m,s*f]];let y=s/Math.sqrt(3),v=f-2*Math.sqrt(2)*m,_=f+Math.sqrt(2)*m;return[[y*v,y*_,y*_],[y*_,y*v,y*_],[y*_,y*_,y*v]]}case 6:return[[s,0,0],[0,s,0],[0,0,o]];case 7:return[[s/2,-s/2,o/2],[s/2,s/2,o/2],[-s/2,-s/2,o/2]];case 8:return[[s,0,0],[0,r,0],[0,0,o]];case 9:return[[s/2,r/2,0],[-s/2,r/2,0],[0,0,o]];case-9:return[[s/2,-r/2,0],[s/2,r/2,0],[0,0,o]];case 91:return[[s,0,0],[0,r/2,-o/2],[0,r/2,o/2]];case 10:return[[s/2,0,o/2],[s/2,r/2,0],[0,r/2,o/2]];case 11:return[[s/2,r/2,o/2],[-s/2,r/2,o/2],[-s/2,-r/2,o/2]];case 12:{let g=Math.acos(c);return[[s,0,0],[r*Math.cos(g),r*Math.sin(g),0],[0,0,o]]}case-12:{let g=Math.acos(h);return[[s,0,0],[0,r,0],[o*Math.cos(g),0,o*Math.sin(g)]]}case 13:{let g=Math.acos(c);return[[s/2,0,-o/2],[r*Math.cos(g),r*Math.sin(g),0],[s/2,0,o/2]]}case-13:{let g=Math.acos(h);return[[s/2,r/2,0],[-s/2,r/2,0],[o*Math.cos(g),0,o*Math.sin(g)]]}case 14:{let g=d,x=u,m=p,f=Math.sqrt(1-m*m),y=o*Math.sqrt(Math.max(0,1+2*g*x*m-g*g-x*x-m*m))/f;return[[s,0,0],[r*m,r*f,0],[o*x,o*(g-x*m)/f,y]]}default:throw new Error(`Quantum ESPRESSO parser: ibrav=${i} not recognized (supported: 0, \xB11, 2, \xB13, 4, \xB15, 6, 7, 8, \xB19, 91, 10, 11, \xB112, \xB113, 14).`)}}function du(i){let t=i.split(`
`),e=[],n=[],s=[],r=[],o=!1;for(let a of t){let l=a.trim();if(l.startsWith("#")||l==="")continue;let c=l.split(/\s+/);if(c[0]==="lattice_vector"&&e.push([parseFloat(c[1]),parseFloat(c[2]),parseFloat(c[3])]),c[0]==="atom"){let h=c[4].charAt(0).toUpperCase()+c[4].slice(1).toLowerCase();n.push(h),s.push([parseFloat(c[1]),parseFloat(c[2]),parseFloat(c[3])])}if(c[0]==="atom_frac"){o=!0;let h=c[4].charAt(0).toUpperCase()+c[4].slice(1).toLowerCase();n.push(h),r.push([parseFloat(c[1]),parseFloat(c[2]),parseFloat(c[3])])}}if(o&&e.length===3)for(let a of r)s.push([a[0]*e[0][0]+a[1]*e[1][0]+a[2]*e[2][0],a[0]*e[0][1]+a[1]*e[1][1]+a[2]*e[2][1],a[0]*e[0][2]+a[1]*e[1][2]+a[2]*e[2][2]]);return e.length===0?{lattice:[[20,0,0],[0,20,0],[0,0,20]],species:n,positions:s,pbc:[!1,!1,!1],title:"FHI-aims geometry"}:{lattice:e,species:n,positions:s,pbc:[!0,!0,!0],title:"FHI-aims geometry"}}var n_=256;function fu(i){if(!Kh()||i.spaceGroup&&i.spaceGroup!=="P1"||i.species.length===0||i.species.length>n_)return i;let t=Jh(i.lattice,i.positions,i.species);return t?{...i,spaceGroup:t.spaceGroup,spaceGroupNumber:t.spaceGroupNumber,hallNumber:t.hallNumber}:i}function i_(i){return{...i,structure:fu(i.structure)}}function s_(i,t,e){let n=i_(r_(i,t));return n.volumetric&&e?.maxGridPoints!=null?{...n,volumetric:Pl(n.volumetric,e)}:n}function r_(i,t){let e=t.toLowerCase();if(e.endsWith(".cif"))return{structure:Ll(i)};if(e.endsWith(".xsf")||e.endsWith(".axsf")){let n=lo(i),{volumetric:s,...r}=n;return{structure:r,volumetric:s}}if(e.endsWith(".cube")||e.endsWith(".cub"))return au(i);if(e.endsWith(".xyz"))return{structure:cu(i)};if(e.endsWith(".pdb")||e.endsWith(".ent"))return{structure:uu(i)};if(e.endsWith(".out")||e.endsWith(".pw")||e.endsWith(".stdout")||e.endsWith(".stdin"))return{structure:Fl(i)};if(e==="geometry.in"||e.endsWith(".in"))return i.includes("atom ")||i.includes("lattice_vector")?{structure:du(i)}:{structure:Fl(i)};if(e.endsWith(".poscar")||e.endsWith(".vasp")||e==="poscar"||e==="contcar")return{structure:Ls(i)};if(e==="xdatcar")return{structure:ru(i)};if(e==="chgcar"||e==="aeccar0"||e==="aeccar2"||e==="parchg")return ou(i);if(i.includes("_cell_length_a")||i.includes("_atom_site"))return{structure:Ll(i)};if(i.includes("PRIMVEC")||i.includes("PRIMCOORD")||i.includes("CRYSTAL")){let n=lo(i),{volumetric:s,...r}=n;return{structure:r,volumetric:s}}return{structure:Ls(i)}}function pu(i,t,e){let n=o_(i,t);if(n.volumetric&&e?.maxGridPoints!=null&&(n.volumetric=Pl(n.volumetric,e)),n.trajectory.frames.length>0){let s=fu(n.trajectory.frames[0]);if(n.trajectory.frames[0]=s,s.spaceGroup&&n.trajectory.frames.length>1)for(let r=1;r<n.trajectory.frames.length;r++)n.trajectory.frames[r]={...n.trajectory.frames[r],spaceGroup:s.spaceGroup,spaceGroupNumber:s.spaceGroupNumber,hallNumber:s.hallNumber}}return n}function o_(i,t){let e=t.toLowerCase();if(e.endsWith(".xsf")||e.endsWith(".axsf"))return Dl(i);if(e==="xdatcar")return{trajectory:co(i)};if(e.endsWith(".xyz"))return{trajectory:hu(i)};if(i.includes("Direct configuration=")||i.includes("Cartesian configuration="))return{trajectory:co(i)};if(i.includes("ANIMSTEPS"))return Dl(i);let n=s_(i,t);return{trajectory:{frames:[n.structure],latticeMode:"fixed"},volumetric:n.volumetric}}var mu="matviz-embed-css",a_=`
.mv-root{position:relative}
.mv-info{position:absolute;left:9px;bottom:8px;font:12px/1.4 system-ui,-apple-system,sans-serif;
  opacity:.6;pointer-events:none;color:var(--fg,currentColor);text-shadow:0 0 3px var(--bg,transparent)}
.mv-info b{font-weight:650;opacity:.95}
.mv-toggle{position:absolute;top:8px;right:8px;width:28px;height:28px;display:flex;align-items:center;
  justify-content:center;border:1px solid var(--border,rgba(128,128,128,.35));border-radius:6px;
  background:var(--bg,rgba(127,127,127,.10));color:var(--fg,currentColor);opacity:.5;cursor:pointer;
  font-size:16px;line-height:1;padding:0}
.mv-toggle:hover{opacity:1}
.mv-panel{position:absolute;top:42px;right:8px;display:none;flex-direction:column;gap:9px;padding:11px;
  min-width:186px;border:1px solid var(--border,rgba(128,128,128,.35));border-radius:8px;
  background:var(--bg,#fff);box-shadow:0 6px 20px rgba(0,0,0,.20);
  font:12px system-ui,-apple-system,sans-serif;color:var(--fg,currentColor);z-index:3}
.mv-root[data-open] .mv-panel{display:flex}
.mv-row{display:flex;flex-wrap:wrap;gap:5px;align-items:center}
.mv-lbl{opacity:.6;font-size:11px;min-width:62px}
.mv-chip,.mv-btn{border:1px solid var(--border,rgba(128,128,128,.4));background:transparent;color:inherit;
  cursor:pointer;font-size:11.5px;opacity:.72}
.mv-chip{padding:3px 8px;border-radius:12px}
.mv-btn{padding:3px 9px;border-radius:6px}
.mv-chip:hover,.mv-btn:hover{opacity:1}
.mv-chip[aria-pressed=true],.mv-btn[aria-pressed=true]{opacity:1;border-color:var(--accent,#3a6ea5);color:var(--accent,#3a6ea5);font-weight:600}
.mv-step{display:inline-flex;align-items:center;gap:3px}
.mv-step button{width:20px;height:20px;border:1px solid var(--border,rgba(128,128,128,.4));border-radius:4px;
  background:transparent;color:inherit;cursor:pointer;line-height:1;font-size:13px;padding:0;opacity:.8}
.mv-step button:hover{opacity:1}
.mv-step span{min-width:12px;text-align:center;font-variant-numeric:tabular-nums}
.mv-slider{width:100%;accent-color:var(--accent,#3a6ea5)}
`;function l_(){if(document.getElementById(mu))return;let i=document.createElement("style");i.id=mu,i.textContent=a_,document.head.appendChild(i)}var c_=[{key:"ball-and-stick",label:"Ball & stick"},{key:"space-filling",label:"Space-filling"},{key:"stick",label:"Stick"},{key:"wireframe",label:"Wireframe"}];function gu(i,t,e={}){l_(),i.classList.add("mv-root");let n=(S,T)=>{let I=document.createElement(S);return T&&(I.className=T),I},s=n("div","mv-info"),r=t.getStructureInfo();if(r){let S=[`<b>${r.formula}</b>`];r.spaceGroup&&S.push(r.spaceGroup),S.push(`<b>${r.atomCount}</b> atoms`),r.volume&&S.push(`<b>${r.volume.toFixed(1)}</b> \xC5\xB3`),s.innerHTML=S.join(" \xB7 ")}i.appendChild(s);let o=n("button","mv-toggle");o.type="button",o.title="Controls",o.setAttribute("aria-label","Toggle controls"),o.textContent="\u22EF",i.appendChild(o);let a=n("div","mv-panel"),l=n("div","mv-row"),c=n("span","mv-lbl");c.textContent="Style",l.appendChild(c);let h=[],d=()=>{let S=t.getDisplayStyle();h.forEach(T=>T.setAttribute("aria-pressed",String(T.dataset.style===S)))};c_.forEach(({key:S,label:T})=>{let I=n("button","mv-chip");I.type="button",I.textContent=T,I.dataset.style=S,I.addEventListener("click",()=>{t.setDisplayStyle(S),d()}),h.push(I),l.appendChild(I)}),a.appendChild(l);let u=e.supercell?[...e.supercell]:[1,1,1],p=n("div","mv-row"),g=n("span","mv-lbl");g.textContent="Supercell",p.appendChild(g),["a","b","c"].forEach((S,T)=>{let I=n("span","mv-step"),M=n("button");M.type="button",M.textContent="\u2212";let b=n("span");b.textContent=String(u[T]);let P=n("button");P.type="button",P.textContent="+";let L=()=>{b.textContent=String(u[T]),t.setSupercell([...u])};M.addEventListener("click",()=>{u[T]>1&&(u[T]--,L())}),P.addEventListener("click",()=>{u[T]<8&&(u[T]++,L())}),I.append(M,b,P),p.appendChild(I)}),a.appendChild(p);let x=t.getIsoRange();if(x&&x.max>0){let S=n("div","mv-row"),T=n("span","mv-lbl");T.textContent="Isolevel";let I=n("input","mv-slider");I.type="range",I.min="0",I.max=String(x.max),I.step=String(x.max/200),I.value=String(t.getIsoLevel()),I.addEventListener("input",()=>t.setIsoLevel(parseFloat(I.value))),S.append(T,I),a.appendChild(S)}let m=n("div","mv-row"),f=n("button","mv-btn");f.type="button",f.textContent="Reset view",f.addEventListener("click",()=>t.resetCamera());let y=n("button","mv-btn");if(y.type="button",y.textContent="Bonds",y.addEventListener("click",()=>t.toggleBonds()),m.append(f,y),t.hasAtomVectors()){let S=n("button","mv-btn");S.type="button";let T=t.getAtomVectorInfo();S.textContent=T?.kind==="magmom"?"Moments":"Vectors",S.setAttribute("aria-pressed",String(t.getShowAtomVectors())),S.addEventListener("click",()=>{let I=!t.getShowAtomVectors();t.setShowAtomVectors(I),S.setAttribute("aria-pressed",String(I))}),m.append(S)}if(a.appendChild(m),t.hasAtomVectors()){let S=n("div","mv-row"),T=n("span","mv-lbl");T.textContent="Arrows",S.appendChild(T);let I=[["redblue","Red\u2013blue"],["single","Single"]],M=[],b=()=>{let P=t.getVectorColormap();M.forEach(L=>L.setAttribute("aria-pressed",String(L.dataset.cm===P)))};I.forEach(([P,L])=>{let D=n("button","mv-chip");D.type="button",D.textContent=L,D.dataset.cm=P,D.addEventListener("click",()=>{t.setVectorColormap(P),b()}),M.push(D),S.appendChild(D)}),b(),a.appendChild(S)}i.appendChild(a),d();let v=S=>{S?i.setAttribute("data-open",""):i.removeAttribute("data-open")};v(e.collapsed===!1),o.addEventListener("click",S=>{S.stopPropagation(),v(!i.hasAttribute("data-open"))});let _=S=>{if(!i.hasAttribute("data-open"))return;let T=S.target;!a.contains(T)&&T!==o&&v(!1)},C=S=>{S.key==="Escape"&&v(!1)};return document.addEventListener("pointerdown",_),document.addEventListener("keydown",C),()=>{document.removeEventListener("pointerdown",_),document.removeEventListener("keydown",C),s.remove(),o.remove(),a.remove(),i.classList.remove("mv-root")}}var h_={cif:"structure.cif",poscar:"POSCAR",contcar:"CONTCAR",vasp:"structure.vasp",xsf:"structure.xsf",axsf:"structure.axsf",xyz:"structure.xyz",pdb:"structure.pdb",cube:"structure.cube",chgcar:"CHGCAR","geometry.in":"geometry.in",aims:"geometry.in"};function u_(i,t){let e=!1,n=-1,s=0,r=0,o=u=>{let p=i.getBoundingClientRect(),g=u.clientX-p.left,x=u.clientY-p.top,m=t.getAxisIndicatorRect();return g>=m.x&&g<=m.x+m.w&&x>=m.y&&x<=m.y+m.h?{px:g,py:x,a:m}:null},a=u=>{if(u.button!==2)return;let p=o(u);p&&(e=!0,n=u.pointerId,s=p.px-p.a.x,r=p.py-p.a.y,i.setPointerCapture(u.pointerId),u.preventDefault(),u.stopImmediatePropagation())},l=u=>{if(!e||u.pointerId!==n){e||(i.style.cursor=o(u)?"move":"");return}let p=i.getBoundingClientRect(),g=u.clientX-p.left-s,x=u.clientY-p.top-r,m=t.getAxisIndicatorSize(),f=i.clientWidth-16-m,y=i.clientHeight-16-m;t.setAxisIndicatorOffset(f-g,y-x),u.preventDefault(),u.stopImmediatePropagation()},c=u=>{if(u.pointerId===n){e=!1,n=-1;try{i.releasePointerCapture(u.pointerId)}catch{}}},h=u=>u.preventDefault(),d={capture:!0};return i.addEventListener("pointerdown",a,d),i.addEventListener("pointermove",l,d),i.addEventListener("pointerup",c,d),i.addEventListener("pointercancel",c,d),i.addEventListener("contextmenu",h),()=>{i.removeEventListener("pointerdown",a,d),i.removeEventListener("pointermove",l,d),i.removeEventListener("pointerup",c,d),i.removeEventListener("pointercancel",c,d),i.removeEventListener("contextmenu",h)}}function d_(i,t,e){if(i==="light"||i==="dark")return i;let n=t.getAttribute(e);return n==="dark"||n==="light"?n:typeof window.matchMedia=="function"&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function f_(i,t={}){let e=document.getElementById(i+"-viewer");if(!e)return console.error(`[matviz] mount("${i}"): no element #${i}-viewer`),null;let n=document.getElementById(i+"-data"),s=(t.data??n?.textContent??"").trim();if(!s)return console.error(`[matviz] mount("${i}"): no structure data (pass opts.data or add #${i}-data)`),null;let r=t.filename??(t.format?h_[t.format.toLowerCase()]??"structure."+t.format:"structure"),o;try{o=pu(s,r)}catch(m){return console.error(`[matviz] mount("${i}"): parse failed \u2014`,m),null}let a=document.createElement("canvas");a.style.cssText="width:100%;height:100%;display:block",e.style.position||(e.style.position="relative"),e.appendChild(a);let l=new ro(a),c=u_(a,l),h=t.themeTarget??document.documentElement,d=t.themeAttribute??"data-theme",u=t.theme??"auto",p=()=>{l.setColorPalette(d_(u,h,d)),l.updateTheme()};p(),t.supercell&&l.setSupercell(t.supercell),t.style&&l.setDisplayStyle(t.style),l.loadTrajectory(o.trajectory),o.volumetric&&(l.loadVolumetric(o.volumetric),typeof t.iso=="number"&&l.setIsoLevel(t.iso)),t.vectors!==!1&&l.hasAtomVectors()&&l.setShowAtomVectors(!0);let g=gu(e,l,{collapsed:t.collapsed,supercell:t.supercell}),x=[];if(u==="auto"){let m=new MutationObserver(p);if(m.observe(h,{attributes:!0,attributeFilter:[d,"class"]}),x.push(()=>m.disconnect()),typeof window.matchMedia=="function"){let f=window.matchMedia("(prefers-color-scheme: dark)"),y=()=>p();f.addEventListener("change",y),x.push(()=>f.removeEventListener("change",y))}}return{prefix:i,renderer:l,setTheme(m){u=m,p()},dispose(){x.forEach(m=>m()),c(),g(),a.remove()}}}var Nl=new Map;function p_(i,t){Nl.get(i)?.dispose();let e=f_(i,t);return e&&Nl.set(i,e),e}function m_(i,t){Nl.get(i)?.setTheme(t)}var xu={mount:p_,setTheme:m_,version:"0.21.0"};window.MatViz=xu;var gv=xu;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
