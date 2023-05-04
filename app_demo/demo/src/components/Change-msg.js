import React from 'react'

const Message = () => {


    return (

        <div>
            <form>
                <label>Id : </label>
               <input type='text' name='id' />
                <label>Name : </label>
                <input type="text" name="name" />
                <label>Age : </label>
                <input type="text" name="age" />
            </form>

            <input type='submit' value='submit'></input>
        </div>
    )

}





export default Message;