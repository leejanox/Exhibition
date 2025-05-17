import { Button } from '@exhibition/components/common/Buttons'
import styles from './EDSection3.module.scss'
import { Heart } from 'lucide-react'
import { useEffect, useState } from 'react';
import { collection, getDocs, addDoc , Timestamp, getDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '@exhibition/firebase';


interface Message {
    id: string;
    name: string;
    message: string;
    date: Timestamp;
    like: number;
}

export const GuestBook = () => {

    const [message, setMessage] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState<string>('');
    const [name, setName] = useState<string>('');

    const fetchMessage = async () => {
        const snapshot = await getDocs(collection(db, 'guestbook'));
        const fetched = snapshot.docs.map(doc => ({
            id: doc.id,
            ...(doc.data() as Omit<Message, 'id'>),
        }));
        setMessage(fetched);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if(!newMessage || !name) {
            alert('모든 필드를 입력해주세요');
            return;
        };

        await addDoc(collection(db,"guestbook"),{
            name: name,
            message: newMessage,
            date: Timestamp.now(),
            like: 0,
        });
        setNewMessage('');
        setName('');
        fetchMessage();
    };

    const handleLike = async (id: string) => {
        const docRef = doc(collection(db, 'guestbook'), id);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            const data = docSnap.data() as Message;
            await updateDoc(docRef, {
                like: data.like + 1,
            });
            fetchMessage();
        }
    }       

    useEffect(()=>{
        fetchMessage();
    },[]);
    

    return (
        <div className={styles.container__guest}>
            <div className={styles.container__guest__header}>
                <h1>Guest Book</h1>
                <p>방명록을 남겨주세요</p>
            </div>
            <table className={styles.container__guest__list}>
                <thead className={styles.container__guest__list__header}>
                    <tr>
                        <th>Name</th>
                        <th>Message</th>
                        <th>Date</th>
                        <th><Heart size={16}/></th>
                    </tr>
                </thead>
                <tbody className={styles.container__guest__list__body}>
                    {message.map((v,i)=>(
                        <tr key={i} id={v.id}>
                            <td>{v.name}</td>
                            <td>{v.message}</td>
                            <td>{v.date.toDate().toLocaleString('ko-KR',{
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit',
                                hour: '2-digit',
                                minute: '2-digit',
                                hour12: false,
                            })}
                            </td>
                            <td><Heart size={16} onClick={()=>handleLike(v.id)}/><span>{v.like}</span></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <form className={styles.container__guest__form} onSubmit={handleSubmit}>
                <input id='name' type="name" placeholder="이름" 
                    value={name} onChange={(e)=>setName(e.target.value)}
                />
                <input id='message' type="text" placeholder="메시지" 
                    value={newMessage} onChange={(e)=>setNewMessage(e.target.value)}
                />
                <Button type="submit">작성</Button>
            </form>
        </div>
    )
}
