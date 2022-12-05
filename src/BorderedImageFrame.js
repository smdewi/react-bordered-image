function BorderedImageFrame() {
    return (
        <div className="border-img">
            <img src={require("./gingerbread-town.jpeg")} alt={"Gingerbread Town in Bergen, Norway"} />
            <p>Gingerbread Town in Bergen, Norway</p>
        </div>
        
    );
}

export default BorderedImageFrame;